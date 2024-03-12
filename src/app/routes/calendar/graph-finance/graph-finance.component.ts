import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { AppComponent } from 'src/app/app.component';

import { GraphFinance } from 'src/app/classes/interfaces/graph.interface';
import { Quotes } from 'src/app/classes/interfaces/quotes';
import { Currency } from 'src/app/classes/interfaces/currency.interface';
import { CurrencyService } from 'src/app/classes/services/currency.service';
import { resolve } from 'path';
const cardDataInit: GraphFinance = {
  currencyPairID: 0,
  percentChange: 0,
  title: '',
  pip: 0,
  transactions: new Array<Quotes>(),
};
@Component({
  selector: 'app-graph-finance',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './graph-finance.component.html',
  styleUrls: ['./graph-finance.component.scss'],
})
export class GraphFinanceComponent {
  @Input('currency') currency: Currency = {} as Currency;
  showGraph = false;
  card_data: GraphFinance = cardDataInit;
  lineChartData: ChartConfiguration<'line'>['data'] = {
    // xLabels: [],
    labels: [],

    datasets: [
      {
        data: [],
        backgroundColor: 'transparent',
        borderColor: '#2FCE7A',
        pointBorderColor: '#2FCE7A',
        pointBackgroundColor: '#2FCE7A',
        borderWidth: 3,
        pointRadius: 1.25,
        pointHoverRadius: 1.25,
        pointHitRadius: 3,
        tension: 0.5,
        pointBorderWidth: 0,
        fill: true,
      },
    ],
  };
  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      x: {
        border: { width: 0, display: false },
        grid: {
          display: false,
        },
      },
      y: {
        border: { width: 0, display: false },
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
  };
  constructor(private _currecnyService: CurrencyService) {
    if (AppComponent.isBrowser.value) {
      this.graphBg = this.setGradient().gradient;
    }
  }
  set graphBg(gradient: CanvasGradient) {
    this.lineChartData.datasets[0].backgroundColor = gradient;
  }
  set graphBordersColor(color: string) {
    this.lineChartData.datasets[0].borderColor = color;
    this.lineChartData.datasets[0].pointBorderColor = color;
    this.lineChartData.datasets[0].pointBackgroundColor = color;
  }
  ngOnInit() {
    // this.getLocalSavedData();
    this.getCurrencyStatus(this.currency.id);
  }

  // async getLocalSavedData() {
  //   const result = await lastValueFrom(
  //     this.baseService.http.post<GraphFinance>(
  //       `${environment.apiUrl}CurrencyPairTransaction/Get`,
  //       [14]
  //     )
  //   );
  //   result.quotes.forEach((it) => {
  //     this.lineChartData.datasets[0].data.push(it.close);
  //     this.lineChartData.labels?.push('');
  //   });
  //   this.showGraph = true;
  // }
  // private async getGraphData() {
  //   const result = await this._ecoCalService.getTimeSeriesData('eurusd');
  //   console.log(result);

  //   result.quotes.forEach((it) => {
  //     this.lineChartData.datasets[0].data.push(it.close);
  //     this.lineChartData.labels?.push('');
  //   });
  //   this.showGraph = true;
  // }

  async getCurrencyStatus(id: number = 14) {
    //14 == EURUSD
    let graphColor;
    const res = this._currecnyService.getGraphData(id);
    if (res) {
      this.card_data = res;
      res.transactions.forEach((it) => {
        this.lineChartData.datasets[0].data.push(it.close);
        this.lineChartData.labels?.push('');
      });

      if (res.percentChange > 0) {
        graphColor = this.setGradient('green');
      } else {
        graphColor = this.setGradient('red');
      }
      this.graphBg = graphColor.gradient;
      this.graphBordersColor = graphColor.borderColor;
      this.showGraph = true;
    }
  }

  setGradient(type: 'red' | 'green' = 'green') {
    let borderColor: '#2FCE7A' | '#FF2A2A' = '#2FCE7A';
    let ctx = document.createElement('canvas').getContext('2d')!;
    let gradient = ctx.createLinearGradient(0, 0, 0, 117);
    if (type == 'green') {
      gradient.addColorStop(0, 'rgba(47,206,122,0.5108018207282913)');
      gradient.addColorStop(0.25, 'rgba(47,206,122,0.2082808123249299)');
      gradient.addColorStop(0.7, 'rgba(255,255,255,0.1903536414565826)');
      borderColor = '#2FCE7A';
    }
    if (type == 'red') {
      gradient.addColorStop(0, 'rgba(255,42,42,0.5108018207282913)');
      gradient.addColorStop(0.25, 'rgba(255,42,42,0.2082808123249299)');
      gradient.addColorStop(0.7, 'rgba(255,255,255,0.1903536414565826)');
      borderColor = '#FF2A2A';
    }
    return { gradient: gradient, borderColor: borderColor };
  }
}
