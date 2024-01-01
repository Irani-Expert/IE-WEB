import { Component, Input } from '@angular/core';
import { SearchModel } from 'src/app/classes/interfaces/search.interface';

@Component({
  selector: 'app-items-search',
  templateUrl: './items-search.component.html',
  styleUrls: ['./items-search.component.scss']
})
export class ItemsSearchComponent {


  @Input('data') searchModel : SearchModel;

  // ==========[هاور]=====
  timer:any;
  loading: boolean = true;


  ngOnInit(){
    this.loading = false;
    this.toggle(0);
  }

changesort(item:any) {
  clearTimeout(this.timer)
  this.searchModel.products
  .forEach(item => item.active = false);

  this.searchModel.brokers
  .forEach(item => item.active = false);

  this.searchModel.articles
  .forEach(item => item.active = false);
  
  item.active = true;

}
toggleMenuLeave(item : any){
   this.timer = setTimeout(()=>{
    item.active = false;
  }, 1000);
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
    groupname: ['maghalat' , 'akhbar']
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
    groupname: ['robate']
  },
  {
    name :'معرفی بارار فارکس از ابتدا',
    name2 : 'lorem',
    name3 : 'lorem 1',
    name4 : 'lorem 2',
    name5 : 'lorem 3',
    img : 'assets/img/Robot1.png',
    id : 3,
    active: false,
    groupname: ['akhbar']
  },
];
  // ===========[تگ ها]======
  
  tags : Array<any> = [
    {
      name :'همه',
      id : 1,
      active: false,
    },
    {
      name :'مقالات',
      id : 2,
      active: false,
    },
    {
      name :'محصولات',
      id : 3,
      active: false,
    },
    {
      name :'بروکرها',
      id : 4,
      active: false,
    },
    {
      name :'رویداد اقتصادی',
      id : 5,
      active: false,
    },
    {
      name :'پادکست ها',
      id : 6,
      active: false,
    }
  ];
  // =======[اکتیو]====
  toggle(index : number){
    this.tags.filter(
      (tags , i) => i !== index && tags.active
    ).forEach(btn => btn.active = !btn.active);
    this.tags[index].active = true;
  }
}
