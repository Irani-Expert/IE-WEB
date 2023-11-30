import { Component } from '@angular/core';
import { IFilterGroup } from 'src/app/shared/filter/models/filter.interface';
import { smoothHeight } from 'src/app/classes/animation';
import { Type } from 'src/app/shared/filter/models/filter.interface';
@Component({
  selector: 'app-responsive-filters',
  templateUrl: './responsive-filters.component.html',
  styleUrls: ['./responsive-filters.component.scss'],
  animations: [smoothHeight],
})
export class ResponsiveFiltersComponent {
  checkboxes = [
    {
      title: 'اکسپرت',
      value: 0,
      checked: false,
    },
    {
      title: 'اندبکاتور',
      value: 1,
      checked: false,
    },
    {
      title: 'محاسبه گر',
      value: 2,
      checked: false,
    },
  ];
  filter: IFilterGroup[] = [
    {
      active: false,
      chevronState: 'default',
      id: 1,
      title: 'دسته بندی',
      type: Type.Category,
    },
    {
      active: false,
      chevronState: 'default',
      id: 2,
      title: 'امتیاز',
      type: Type.Rating,
    },
    {
      active: false,
      chevronState: 'default',
      id: 3,
      title: 'محدوده قیمت',
      type: Type.PriceRange,
    },
    {
      active: false,
      chevronState: 'default',
      id: 4,
      title: 'تولید کننده',
      type: Type.Producer,
    },
  ];
  openNav: boolean = true;
  changed = false;
  filterModel: IFilterGroup[];
  filterBoxClass: string = '';
  closeNav() {
    this.openNav = !this.openNav;
  }
  changeActiveMenu(item: IFilterGroup) {}
}
