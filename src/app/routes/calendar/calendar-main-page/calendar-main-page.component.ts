import { Component, ViewEncapsulation } from '@angular/core';
import { Bubble, Maps, MapsTooltip } from '@syncfusion/ej2-angular-maps';
Maps.Inject(Bubble, MapsTooltip);

@Component({
  selector: 'app-calendar-main-page',
  templateUrl: './calendar-main-page.component.html',
  styleUrls: ['./calendar-main-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarMainPageComponent {
  ngOnInit(): void {}
}
