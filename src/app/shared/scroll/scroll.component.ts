import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
})
export class ScrollComponent {
  @Input() activeId: number;
  @Output() scrollClick1 = new EventEmitter();
  @Output() scrollClick2 = new EventEmitter();
  @Output() scrollClick3 = new EventEmitter();
  @Output() scrollClick4 = new EventEmitter();
  @Output() scrollClick5 = new EventEmitter();

  scroll: Array<any> = [
    {
      id: 1,
      name: 'توضیحات',
      active: false,
    },
    {
      id: 2,
      name: 'امکانات',
      active: false,
    },
    // {
    //   id:3,
    //   name:'بک تست',
    //   active:false
    // },
    {
      id: 3,
      name: 'سوالات متداول',
      active: false,
    },
    {
      id: 4,
      name: 'نظرات',
      active: false,
    },
  ];
  ngOnInit() {
    this.scroll[this.activeId].active = true;
  }
  toggle(index: number, event: any) {
    switch (index) {
      case 0:
        this.scrollClick1.emit(event);
        break;
      case 1:
        this.scrollClick2.emit(event);
        break;
      case 2:
        this.scrollClick4.emit(event);
        break;
      case 3:
        this.scrollClick5.emit(event);
        break;
      case 4:
        this.scrollClick5.emit(event);
        break;
    }
  }
}
