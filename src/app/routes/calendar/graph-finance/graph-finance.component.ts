import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-graph-finance',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './graph-finance.component.html',
  styleUrls: ['./graph-finance.component.scss'],
})
export class GraphFinanceComponent {
  lineChartData: ChartConfiguration<'line'>['data'] = {
    // xLabels: [],
    labels: [],

    datasets: [
      {
        data: [1.1056, 1.1039, 1.0942, 1.0928, 1.0947, 1.0942, 1.0952, 1.0932],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 5,
        pointRadius: 2,
        pointHoverRadius: 7,
        pointHitRadius: 5,
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
    font: { family: 'Yekan-Bakh', weight: 'bold' },
  };
  constructor() {
    this.lineChartData.datasets[0].data.forEach((it) => {
      if (typeof it === 'number') {
        it = it * 100;
      }
      this.lineChartData.labels?.push('');
    });
  }
}
