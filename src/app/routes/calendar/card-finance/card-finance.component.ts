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

  @Input('data') data : any;
  @Input ('type') type : number;

  color = ['#FFC01E','#FBC63D57'];
  bgColor = ['#3b90ea','#65a7ecf2'];
  upTrend : boolean;

  // hoverData : string;
  // hoverData2 : string;
  chartData : number;
  chartData2 : number;

constructor(){
} 

ngOnInit (){

  if (this.data.changePercent >= 0) {
    this.upTrend = true;
  }
  else {
    this.upTrend =false;
  }
  this.pushDataChat();

} 

getChange (){
}

pushDataChat(){
  if (this.data.id == 1){
    this.doughnutChartData.datasets[0].backgroundColor = this.color;
    this.doughnutChartData.labels = [ 'میزان بیکاری' , 'میزان اشتغال']
    this.doughnutChartData.datasets[0].data = [this.data.lastValue  , 100-this.data.lastValue];

  }
  else {    
    this.doughnutChartData.datasets[0].backgroundColor = this.bgColor;
    this.doughnutChartData.labels = [ 'افزایش تولید ناخالص ملی' , 'افزایش تولید ناخالص ملی']
    this.doughnutChartData.datasets[0].data = [this.data.lastValue , 100-this.data.lastValue];

  }
}

  // Doughnut
  // public doughnutChartLabels1: string[] = [
  //   'x',
  //   'y',
  // ];

  public doughnutChartData: ChartData<'doughnut'> = {
    // labels: this.doughnutChartLabels1,
    datasets: [
      { data: [],
        // borderColor : ['#FFC01E' , '#FBC63D57'],
         backgroundColor: []
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






}
