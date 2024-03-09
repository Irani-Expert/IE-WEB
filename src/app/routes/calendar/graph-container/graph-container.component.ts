import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphFinanceComponent } from '../graph-finance/graph-finance.component';
import { CurrencyService } from 'src/app/classes/services/currency.service';
import { UserClaimService } from 'src/app/classes/services/user-claim.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Currency } from 'src/app/classes/interfaces/currency.interface';
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
  imports: [CommonModule, GraphFinanceComponent],
  templateUrl: './graph-container.component.html',
  styleUrls: ['./graph-container.component.scss'],
})
export class GraphContainerComponent {
  changingList: boolean = true;
  loadGraphComponent: boolean = false;
  currencies = new Array<Currency>();
  userObserver$;
  constructor(
    private _currencyService: CurrencyService,
    private _userClaimService: UserClaimService
  ) {
    this.userObserver$ = AuthService.loggedIn.asObservable();
  }

  async ngOnInit() {
    const res = await this._currencyService.getCurrencies();
    if (res) {
      this.userObserver$.subscribe({
        next: (val) => {
          this.favoritedCurrencies(val);
        },
      });
    }
  }
  get allCurrencies() {
    return this._currencyService.currenciesSubject.value;
  }

  async favoritedCurrencies(loggedIn: boolean) {
    let pairs: number[];
    if (loggedIn) {
      pairs = this.getCurrencyFavPairs();
      const res = await this._currencyService.getCurrencyPairStatus(pairs);
      if (res) {
        this.loadGraphComponent = true;
      }
    } else {
      this.currencies = [];
      this.currencies.push(currencyInit);
      pairs = [14];
      const res = await this._currencyService.getCurrencyPairStatus(pairs);
      if (res) {
        this.loadGraphComponent = true;
      }
    }
  }

  getCurrencyFavPairs() {
    let pairs: number[] = [];
    this.currencies = [];
    let favs = this._userClaimService.favoriteSubject.value;
    if (favs.length > 0) {
      favs = favs.filter((it) => it.tableType == 39);

      try {
        favs.forEach((it) => {
          let currency = this.allCurrencies.find((item) => item.id == it.rowID);
          this.currencies.push(currency!);
          pairs.push(currency!.id);
        });
        return pairs;
      } catch (ex) {
        console.log(`Err Happend => ${ex}`, 'Initial Pair Returned');
        return [14];
        //14 === EUR USD
      }
    }
    return [14];
    //14 === EUR USD
  }
}
