import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

// const ctx = document.createElement('canvas').getContext('2d')!;
// var gradiant = ctx.createLinearGradient(0,0,0,180);
// gradiant.addColorStop(0,'#FFFFFF')
// gradiant.addColorStop(0.25,'#FFC01E')
// gradiant.addColorStop(1,'#FFFFFF')


@Component({
  selector: 'app-card-finance',
  templateUrl: './card-finance.component.html',
  styleUrls: ['./card-finance.component.scss']
})


export class CardFinanceComponent {




  // Doughnut
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 96 , 4],
        // borderColor : ['#FFC01E' , '#FBC63D57'],
         backgroundColor: ['#FFC01E' , '#FBC63D57'],
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }





  @Input('data') data : any;
  @Input ('type') type : number;

  leftPart : boolean;

constructor(){
} 

ngOnInit (){
  if( this.type == 2 ){
    this.leftPart = true;
  }
  else{
    this.leftPart = false;
  }
} 
}
