import { Component } from '@angular/core';

@Component({
  styles: [
    `
      .a {
        fill: none;
        stroke-linecap: round;
        stroke: #000;
      }
    `,
  ],
  selector: 'app-importance',
  templateUrl: 'importance.component.html',
  standalone: true,
})
export class ImportanceComponent {}
