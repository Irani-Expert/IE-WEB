import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphFinanceComponent } from '../graph-finance/graph-finance.component';

@Component({
  selector: 'app-graph-container',
  standalone: true,
  imports: [CommonModule, GraphFinanceComponent],
  templateUrl: './graph-container.component.html',
  styleUrls: ['./graph-container.component.scss'],
})
export class GraphContainerComponent {}
