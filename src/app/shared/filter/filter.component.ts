import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFilterGroup } from './models/filter.interface';
import { FilterService } from './filter.service';
import { smoothHeight } from 'src/app/classes/animation';
import { SmoothHeightDirective } from 'src/app/classes/directives/smooth-height.directive';

@Component({
  standalone: true,
  templateUrl: 'filter.component.html',
  selector: 'app-filter',
  imports: [CommonModule, SmoothHeightDirective],
  providers: [FilterService],
  animations: [smoothHeight],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FilterComponent {
  activeId: number = -1;
  changed = false;
  @Output('deleteFilters') deleteEmitter = new EventEmitter<boolean>();
  @Input('classList') classList: string = '';
  @Input('search') search: boolean = false;
  @Input('filterBoxClass') filterBoxClass: string = '';
  @Input('filterModel') filterModel: IFilterGroup[];
  constructor() {}
  ngOnInit() {
    this.filterModel[0].chevronState = 'rotated';
    this.filterModel[0].active = true;
    this.activeId = this.filterModel[0].id;
  }
  changeActiveMenu(item: IFilterGroup) {
    this.changed = !this.changed;
    this.setActiveMainItem(item);
  }
  setActiveMainItem(item: IFilterGroup) {
    if (this.activeId == item.id) {
      this.filterModel.forEach((i) => {
        i.chevronState = 'default';
        i.active = false;
      });
      this.activeId = -1;
    } else {
      this.activeId = item.id;
      this.filterModel.forEach((i) => {
        i.chevronState = 'default';
        i.active = false;
      });
      item.chevronState = 'rotated';
      item.active = true;
    }
  }
  deleteFilters() {
    this.deleteEmitter.emit(true);
  }
}
