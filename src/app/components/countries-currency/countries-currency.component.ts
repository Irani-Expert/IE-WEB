import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarCountry } from 'src/app/classes/interfaces/calendarcountry';

@Component({
  selector: 'app-countries-currency',
  templateUrl: './countries-currency.component.html',
  styleUrls: ['./countries-currency.component.scss']
})
export class CountriesCurrencyComponent {
@Input ('data') calendarCountry : CalendarCountry[] = new Array<CalendarCountry>;

activeList = false;

constructor(
  private router: Router,
){}

hideList(){
this.activeList = !this.activeList;
}

routeCountries(browserTitle : string){
  this.router.navigateByUrl(`economic-calendar/${browserTitle}`);
}

ngOnInit(){
}

}
