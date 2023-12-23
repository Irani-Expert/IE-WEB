import { Component } from '@angular/core';

@Component({
  selector: 'app-items-search',
  templateUrl: './items-search.component.html',
  styleUrls: ['./items-search.component.scss']
})
export class ItemsSearchComponent {

  // ==========[هاور]=====
sorttype: number = 1;

changesort(id: number) {
  this.sorttype = id;
  this.searchBox.filter(
    (tags , i) => i !== id && tags.active
  ).forEach(item => item.active = !item.active);
  this.searchBox[id].active = true;
}
toggleMenuLeave(id : number){
  this.searchBox[id].active = false;
}

searchBox : Array<any> = [
  {
    name :'AMarkets - بررسی بروکر آمارکتس',
    name2 : 'مدرسه ترید',
    name3 : 'مدرس:حامد زارع',
    name4 : 'امتیاز:5',
    name5 : 'رایگان',
    img : 'assets/img/blog-cart.svg',
    id : 1,
    active: false,
  },
  {
    name :'ATM ربات معامله گر',
    name2 : 'lorem',
    name3 : 'lorem 1',
    name4 : 'lorem 2',
    name5 : 'lorem 3',
    img : 'assets/img/img-blog-detail.svg',
    id : 2,
    active: false,
  },
];

}
