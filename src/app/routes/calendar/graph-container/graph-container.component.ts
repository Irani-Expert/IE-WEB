import { Component } from '@angular/core';
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
  imports: [CommonModule, GraphFinanceComponent, ModalComponent],
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
  disableBtn = false;
  showModal: boolean = false;
  pairs: number[];
  changingList: boolean = false;
  loadGraphComponent: boolean = false;
  currencies = new Array<Currency>();
  favsObserver$: Observable<Favorite[]>;
  favsSubscription: Subscription;
  constructor(
    private _currencyService: CurrencyService,
    private _userClaimService: UserClaimService,
    private _modal: ModalService,
    private _authService: AuthService
  ) {}

  async ngOnInit() {
    const res = await this._currencyService.getCurrencies();
    this.favsObserver$ = this._userClaimService.favoriteSubject.asObservable();
    this.favsSubscription = this.favsObserver$.subscribe({
      next: async (it) => {
        let items;
        items = it.filter((item) => item.tableType == 39);

        if (items.length <= 0) {
          console.log('User Doest Liked any chart data');
        } else {
          await this.favoritedCurrencies();
        }
      },
      complete: async () => {
        await this.setStatic();
      },
    });
  }

  ngAfterViewInit() {
    if (this.currencies.length == 0) {
      this.setStatic();
    }
  }
  get allCurrencies() {
    return this._currencyService.currenciesSubject.value;
  }

  async favoritedCurrencies() {
    this.loadGraphComponent = false;
    let pairs = await this.getCurrencyFavPairs();
    const res = await this._currencyService.getCurrencyPairStatus(pairs);
    if (res) {
      this.loadGraphComponent = true;
    }
  }

  async setStatic() {
    this.loadGraphComponent = false;

    this.currencies = [];
    this.currencies.push(currencyInit);
    let pairs = [14];
    const res = await this._currencyService.getCurrencyPairStatus(pairs);
    if (res) {
      this.loadGraphComponent = true;
    }
  }

  async getCurrencyFavPairs() {
    let pairs: number[] = [];
    this.currencies = [];
    let favs = this._userClaimService.favoriteSubject.value;
    if (favs.length > 0) {
      favs = favs.filter((it) => it.tableType == 39);
      favs.forEach((it) => {
        let currency = this.allCurrencies.find((item) => item.id == it.rowID);
        this.currencies.push(currency!);
        pairs.push(currency!.id);
      });
      return pairs;
    }
    return [14];
    //14 === EUR USD
  }

  async deleteFav(id: number) {
    this.disableBtn = true;
    const favs = this._userClaimService.favoriteSubject.value.filter(
      (it) => it.tableType == 39
    );
    let favIDToRemove = favs.find((it) => it.rowID == id)?.id!;
    const res = await this._userClaimService.removeFav(favIDToRemove);
    if (res) this.updateList();
    this.disableBtn = false;
  }
  ngOnDestroy() {
    this.favsSubscription.unsubscribe();
  }
  async addFav(id: number) {
    let userID = this._authService._user.id;
    if (userID) {
      const res = await this._userClaimService.addFav(id, 39, 54);
      if (res) {
        this._modal.closeModal();
      }
    } else {
      this.openAuthModal();
    }
  }

  updateList() {}

  // Open The Modal of All Available Currencies
  openCurrenciesModal() {
    this._modal.open().subscribe({
      next: (action) => {
        console.log(action);
      },
      complete: () => {
        HeaderLayoutComponent.modalStatus = false;

        this.showModal = false;
      },
    });
    this.showModal = true;
  }

  // Open The Modal of Signing In

  openAuthModal() {
    HeaderLayoutComponent.modalStatus = true;
    HeaderLayoutComponent.modalView = 'login';
  }
}
