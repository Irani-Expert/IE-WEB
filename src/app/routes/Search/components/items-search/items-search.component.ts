import { Component, Input } from '@angular/core';
import { SearchModel } from 'src/app/classes/interfaces/search.interface';
import { environment } from 'src/environments/environment.dev';

@Component({
  selector: 'app-items-search',
  templateUrl: './items-search.component.html',
  styleUrls: ['./items-search.component.scss']
})
export class ItemsSearchComponent {


  @Input('data') searchModel : SearchModel;
  allItems : any = [];
  contentUrl = environment.contentUrl;

  // ==========[هاور]=====
  timer:any;
  loading: boolean = true;
  showingItem : any;
  ngOnInit(){
    console.log(this.tags[0]);

    this.loading = false;
    this.toggle(0);
    this.showingItem = this.allItems;
    this.searchModel.articles.forEach((it)=>{
      let item = {...it, tableType: 1};
      this.allItems.push(item);
    });
    this.searchModel.products.forEach((it)=>{
      let item = {...it, tableType: 6};
      this.allItems.push(item);
    });
    this.searchModel.brokers.forEach((it)=>{
      let item = {...it, tableType: 36};
      this.allItems.push(item);
    });
    // this.searchModel.calendar.forEach((it)=>{
    //   let item = {...it, tableType: 34};
    //   this.allItems.push(item);
    // });
  }
  changeViewItem(tableType : number){
    if (tableType == null){
      this.showingItem = this.allItems;
    }
    else{
      this.showingItem = this.allItems.slice().filter((it : any)  => it.tableType == tableType)
    }
  }

changesort(item:any) {
  clearTimeout(this.timer)
  this.allItems
  .forEach((item : any) => item.active = false);
  item.active = true;
}
toggleMenuLeave(item : any){
   this.timer = setTimeout(()=>{
    item.active = false;
  }, 1000);
}

  // ===========[تگ ها]======
  
  tags : Array<any> = [
    {
      name :'همه',
      id : 1,
      active: false,
      tableType : null,
    },
    {
      name :'مقالات',
      id : 2,
      active: false,
      tableType: 1
    },
    {
      name :'محصولات',
      id : 3,
      active: false,
      tableType: 6
    },
    {
      name :'بروکرها',
      id : 4,
      active: false,
      tableType: 36
    },
    {
      name :'رویداد اقتصادی',
      id : 5,
      active: false,
      tableType : 34
    },
    // {
    //   name :'پادکست ها',
    //   id : 6,
    //   active: false,
    // }
  ];
  // =======[اکتیو]====
  toggle(index : number){
    this.tags.filter(
      (tags , i) => i !== index && tags.active
    ).forEach(btn => btn.active = !btn.active);
    this.tags[index].active = true;
  }
}
