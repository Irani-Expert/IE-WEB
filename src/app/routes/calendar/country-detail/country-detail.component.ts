import { Component, Input } from '@angular/core';
import { IndicatorsModel } from 'src/app/classes/interfaces/indicators.interface';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent {

  @Input('data') data : any;

  send_date=new Date();
  dateNow : any;
  constructor(){
    this.send_date.setMonth(this.send_date.getMonth());
    this.dateNow=this.send_date.toISOString().slice(0,10);
    
  }
  ngAfterViewInit(){
    // console.log(this.data.details.name);
    
  }

}
