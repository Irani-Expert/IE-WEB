import { Component, ViewEncapsulation } from '@angular/core';
import { world_map } from './world-map';
import { Bubble, Maps, MapsTooltip } from '@syncfusion/ej2-angular-maps';
Maps.Inject(Bubble, MapsTooltip);

@Component({
  selector: 'app-calendar-main-page',
  templateUrl: './calendar-main-page.component.html',
  styleUrls: ['./calendar-main-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarMainPageComponent {
  public shapeData?: object;
  public shapeDataPath?: object | any;
  public shapePropertyPath?: object | any;
  public bubbleSettings?: object;
  public shapeSettings?: object;

  ngOnInit(): void {
    this.shapeData = world_map;
    this.shapeDataPath = 'name';
    this.shapePropertyPath = 'name';
    this.shapeSettings = {
      fill: '#E5E5E5',
    };
    this.bubbleSettings = [
      {
        visible: true,
        minRadius: 5,
        dataSource: [
          { name: 'India', population: '3' },
          { name: 'Pakistan', population: '3' },
        ],
        maxRadius: 80,
        valuePath: 'population',
        tooltipSettings: {
          visible: true,
          valuePath: 'population',
          template:
            '<div><div class="toolback" style="font-size:0.7rem" ><div class="listing2"> <center> ${currency} ${name} <span class="${Icon}"></span> </center></div><hr style="margin-top: 2px;margin-bottom:5px;border:0.5px solid #DDDDDD"><div class="d-inline-flex  align-items-end  "><span class="d-inline-flex calendarFilterRedColor fa fa-circle-dot m-0 ms-2 p-0"></span><span class="d-inilne-flex listing1 m-0 p-0">رویداد بسیار مهم : </span><span class="d-inline-flex listing2 m-0 p-0">${highValues}</span></div><div class="d-inline-flex  align-items-end  "> <span class="d-inline-flex  fa fa-circle-dot m-0 ms-2 p-0  calendarFilterOrangeColor"></span> <span class="listing1">رویداد مهم : </span><span class="listing2">${moderateValues}</span></div><div class="d-inline-flex  align-items-end  "><span class="d-inline-flex calendarFilterYellowColor fa fa-circle-dot m-0 ms-2 p-0"></span><span class="listing1">رویداد معمولی : </span><span class="listing2">${lowValues}</span> </div><div class="d-inline-flex  align-items-end  "><span class="d-inline-flex fa fa-circle-dot m-0 ms-2 p-0 calendarFilterGreyColor"></span><span class="listing1"> رویداد کم اهمیت : </span><span class="listing2">${noneValues}</span></div></div> </div>',
        },
      },
    ];
  }
}
