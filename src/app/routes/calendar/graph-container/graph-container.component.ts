import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphFinanceComponent } from '../graph-finance/graph-finance.component';
import { CurrencyService } from 'src/app/classes/services/currency.service';
import { UserClaimService } from 'src/app/classes/services/user-claim.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Currency } from 'src/app/classes/interfaces/currency.interface';
import { trigger, transition, style, animate } from '@angular/animations';
import { ModalService } from 'src/app/shared/modal/services/modal.service';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { HeaderLayoutComponent } from 'src/app/components/header-layout/header-layout.component';
import { Observable, Subscription } from 'rxjs';
import { Favorite } from 'src/app/classes/interfaces/favorite';
import { TradingViewComponent } from 'src/app/components/trading-view/trading-view.component';
import { Utils } from 'src/app/classes/utils';
import { AppComponent } from 'src/app/app.component';
const currencyInit: Currency = {
  currencyPairType: 0,
  currencyPairTypeDescription: 'Crypto',
  id: 14,
  secondTitle: '',
  title: 'EURUSD',
};
@Component({
  selector: 'app-graph-container',
  standalone: true,
  imports: [
    CommonModule,
    GraphFinanceComponent,
    ModalComponent,
    TradingViewComponent,
  ],
  templateUrl: './graph-container.component.html',
  styleUrls: ['./graph-container.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class GraphContainerComponent {
  @ViewChild('listFavs') favsElement: ElementRef;
  disableBtn = false;
  showModal: boolean = false;
  pairs: number[];
  changingList: boolean = false;
  loadGraphComponent: boolean = false;
  currencies = new Array<Currency>();
  userObserver$: Observable<boolean>;
  userSubscription: Subscription;
  tvStatus = 0;
  constructor(
    private _currencyService: CurrencyService,
    private _userClaimService: UserClaimService,
    private _modal: ModalService,
    private _authService: AuthService
  ) {}

  async ngOnInit() {
    await this._currencyService.getCurrencies();
  }
  ngAfterContentInit() {
    this.userObserver$ = AuthService.loggedIn.asObservable();
    this.userSubscription = this.userObserver$.subscribe({
      next: (value) => {
        if (!value) {
          this.setStatic();
        } else {
          this.favoritedCurrencies();
        }
        setTimeout(() => {
          this.loadGraphComponent = true;
        }, 2500);
      },
    });
  }
  get allCurrencies() {
    return this._currencyService.currenciesSubject.value;
  }

  async favoritedCurrencies() {
    this.loadGraphComponent = false;

    let favorites: Favorite[] = this._userClaimService.favoriteSubject.value;
    let pairs = await this.getCurrencyFavPairs(favorites);

    if (pairs.length > 0) {
      await this._currencyService.getCurrencyPairStatus(pairs);
    }
    this.loadGraphComponent = true;
  }

  async setStatic() {
    this.loadGraphComponent = false;
    this.currencies = [];
    this.currencies.push(currencyInit);
    let pairs = [14];
    await this._currencyService.getCurrencyPairStatus(pairs);
  }

  async getCurrencyFavPairs(favorites: Favorite[]) {
    let pairs: number[] = [];
    this.currencies = [];
    if (favorites.length > 0) {
      favorites = favorites.filter((it) => it.tableType == 39);
      favorites.forEach((it) => {
        let currency = this.allCurrencies.find((item) => item.id == it.rowID);
        this.currencies.push(currency!);
        pairs.push(currency!.id);
      });
      return pairs.length > 0 ? pairs : [];
    }
    return [];
    //14 === EUR USD
  }

  async deleteFav(id: number) {
    this.disableBtn = true;
    const favs = this._userClaimService.favoriteSubject.value.filter(
      (it) => it.tableType == 39
    );
    let favIDToRemove = favs.find((it) => it.rowID == id)?.id!;
    const res = await this._userClaimService.removeFav(favIDToRemove);
    if (res) this.updateList(id, ListAction.Delete);
    this.disableBtn = false;
  }
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
  async addFav(id: number) {
    this.disableBtn = true;
    let userID = this._authService._user.id;
    let index = this.currencies.findIndex((it) => it.id == id);

    if (index !== -1) {
      this._currencyService.toastError('این ارز در حال حاضر در لیست موجود است');
      this.disableBtn = false;

      return;
    }
    const res = await this._userClaimService.addFav(id, 39, userID);
    if (res) {
      await this.updateList(id, ListAction.Add);
    }
    this.disableBtn = false;
  }

  addTradingView() {
    this.tvStatus = TVStatus.Created;
    setTimeout(() => {
      TradingViewComponent.createView();
    }, 500);
    // switch (this.tvStatus) {
    //   case 0:

    //   break;
    // case 1:
    //   this.tvStatus = TVStatus.Hidden;
    //   break;
    // case 2:
    //   this.tvStatus = TVStatus.Show;
    //   break;
    // case 3:
    //   this.tvStatus = TVStatus.Hidden;
    //   break;
    // }
  }
  async updateList(id: number, type: ListAction) {
    if (type == ListAction.Delete) {
      let index = this.currencies.findIndex((it) => it.id == id);
      this.currencies.splice(index, 1);
      return true;
    } else {
      let index = this.allCurrencies.findIndex((it) => it.id == id);
      const res = await this._currencyService.addSingleGraph(id);
      this.currencies.push(this.allCurrencies[index]);
      return res;
    }
  }

  // Open The Modal of All Available Currencies
  openCurrenciesModal() {
    this._modal.open().subscribe({
      complete: () => {
        this.changingList = false;

        this.showModal = false;
      },
    });
    this.showModal = true;
  }

  openModal() {
    if (AuthService.loggedIn.value) {
      this.openCurrenciesModal();
    } else {
      this.openAuthModal();
    }
  }

  // Open The Modal of Signing In

  openAuthModal() {
    this._modal.open().subscribe({
      complete: () => {
        this.changingList = false;
        HeaderLayoutComponent.modalStatus = false;
      },
    });
    HeaderLayoutComponent.modalStatus = true;
    HeaderLayoutComponent.modalView = 'login';
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (AppComponent.isBrowser.value) {
      if (
        Utils.scrollTracker() > this.favsElement.nativeElement.offsetTop &&
        this.tvStatus == 0
      ) {
        this.addTradingView();
      }
    } else {
      console.log('App is On Servers ==>  Tracking the Scroll Denied');
    }
  }
}

enum ListAction {
  Delete,
  Add,
}

enum TVStatus {
  NotCreated,
  Created,
  Hidden,
  Show,
}
