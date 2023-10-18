import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SwitchItem } from './switch.interface';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent {
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
      this.setActiveItem(item);
      this.changed.emit(true);
    } else {
      return;
    }
  }
  checkActiveItem() {
    let item = this.items.find((it) => it.name == this.activeItem);
    this.setActiveItem(item || this.items[0]);
  }
}
