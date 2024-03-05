import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { AppComponent } from 'src/app/app.component';

import { EcoCalService } from 'src/app/classes/services/eco-cal.service';
import { GraphFinance } from 'src/app/classes/interfaces/graph.interface';
import { Quotes } from 'src/app/classes/interfaces/Quotes';
const cardDataInit: GraphFinance = {
  currencyPairID: 0,
  percentChange: 0,
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
  constructor(private _ecoCalService: EcoCalService) {
    if (AppComponent.isBrowser.value) {
      this.lineChartData.datasets[0].backgroundColor = this.setGradient();
    }
  }

  ngOnInit() {
    // this.getLocalSavedData();
    this.getDataFromApi();
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

  async getDataFromApi(id: number = 14) {
    const res = await this._ecoCalService.getCurrencyPairStatus([id]);
    if (res.data) {
      this.card_data = res.data[0];
      res.data[0].transactions.forEach((it) => {
        this.lineChartData.datasets[0].data.push(it.close);
        this.lineChartData.labels?.push('');
      });
      this.showGraph = true;
    }
  }

  setGradient(type: 'red' | 'green' = 'green') {
    let ctx = document.createElement('canvas').getContext('2d')!;
    let gradient = ctx.createLinearGradient(0, 0, 0, 400);
    if (type == 'green') {
      gradient.addColorStop(0, 'rgba(47,206,122,0.5108018207282913)');
      gradient.addColorStop(0.08, 'rgba(172,242,205,0.7780287114845938)');
      gradient.addColorStop(0.15, 'rgba(255,255,255,0.8780287114845938)');
    }

    return gradient;
  }
}
