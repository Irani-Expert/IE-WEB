import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SwitchItem } from './switch.interface';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent {
  //For Making animation per Item
  isChanging = false;
  translatePercent: string = '0%';
  @Input('items') items: SwitchItem[] = [];
  @Input('activeView') activeItem?: string;
  @Output('output') changed: EventEmitter<boolean> = new EventEmitter(true);
  selectedItem: SwitchItem | undefined;
  loading = true;
  constructor() {}
  setActiveItem(item: SwitchItem) {
    this.items.forEach((it) => (it.active = false));
    item.active = true;
    this.selectedItem = item;
  }
  ngOnInit() {
    this.checkActiveItem();
    this.loading = false;
  }
  changeActiveItem(item: SwitchItem, index?: number) {
    if (item.id !== this.selectedItem?.id) {
      this.isChanging = true;
      this.calculatePercent(index!);
      this.setActiveItem(item);
      this.changed.emit(true);
      setTimeout(() => {
        this.isChanging = false;
      }, 190);
    } else {
      return;
    }
  }
  checkActiveItem() {
    let index = this.items.findIndex((it) => it.name == this.activeItem);
    this.calculatePercent(index);
    this.setActiveItem(this.items[index] || this.items[0]);
  }
  calculatePercent(index: number) {
    let percent = 100 * index;
    this.translatePercent = `-${percent + 2}%`;
  }
}
