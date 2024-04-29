import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarCountry } from 'src/app/classes/interfaces/calendarcountry';
import { ModalService } from 'src/app/shared/modal/services/modal.service';

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
  private modal: ModalService,

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
  // =======[مدال لاگین]========
  modalStatus: boolean = false;
  modalWidth : "80%";

  openModal() {
    this.modal.open().subscribe({
      next: (action) => {
        console.log(action);
      },

    });
    this.modalStatus = true;
  }
  
  closeMdal(){
    this.modal.closeModal();
    this.modalStatus = false;
  }
}
