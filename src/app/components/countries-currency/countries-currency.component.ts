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
  
  if (this.activeList == false){
    document.getElementById("list")?.classList.remove('show-list');
    document.getElementById("list")?.classList.add('hiede-list');
  }
  else {
    document.getElementById("list")?.classList.remove('hiede-list');
    document.getElementById("list")?.classList.add('show-list');
  }
}

routeCountries(browserTitle : string){
  this.router.navigateByUrl(`economic-calendar/${browserTitle}`);
}

ngOnInit(){
}

}
