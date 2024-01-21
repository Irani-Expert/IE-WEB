import { Component } from '@angular/core';
import { searchServices } from 'src/app/classes/services/search.services';
import { environment } from 'src/environments/environment.dev';

@Component({
  selector: 'app-items-search',
  templateUrl: './items-search.component.html',
  styleUrls: ['./items-search.component.scss'],
})
export class ItemsSearchComponent {
  allItems: any = [];
  contentUrl = environment.contentUrl;
  loading = true;
  selectedTableType : number;
  // ==========[هاور]=====
  timer: any;
  showingItem: any;

  ngOnInit() {
    this.toggle(0);
    this.showingItem = this.allItems;

    // this.searchModel.calendar.forEach((it)=>{
    //   let item = {...it, tableType: 34};
    //   this.allItems.push(item);
    // });
  }
  changeViewItem(tableType: number) {
    if (tableType == null) {
      this.showingItem = this.allItems;
    } else {
      this.showingItem = this.allItems
        .slice()
        .filter((it: any) => it.tableType == tableType);
    }
    this.selectedTableType = tableType;
    console.log(this.selectedTableType);
  }

  changesort(item: any) {
    clearTimeout(this.timer);
    this.allItems.forEach((item: any) => (item.active = false));
    item.active = true;
  }
  toggleMenuLeave(item: any) {
    this.timer = setTimeout(() => {
      item.active = false;
    }, 1000);
  }

  // ===========[تگ ها]======

  tags: Array<any> = [
    {
      name: 'همه',
      id: 1,
      active: false,
      tableType: null,
    },
    {
      name: 'مقالات',
      id: 2,
      active: false,
      tableType: 1,
    },
    {
      name: 'محصولات',
      id: 3,
      active: false,
      tableType: 6,
    },
    {
      name: 'بروکرها',
      id: 4,
      active: false,
      tableType: 36,
    },
    {
      name: 'رویداد اقتصادی',
      id: 5,
      active: false,
      tableType: 34,
    },
    // {
    //   name :'پادکست ها',
    //   id : 6,
    //   active: false,
    // }
  ];
  // =======[اکتیو]====
  toggle(index: number) {
    this.tags
      .filter((tags, i) => i !== index && tags.active)
      .forEach((btn) => (btn.active = !btn.active));
    this.tags[index].active = true;
  }
  constructor(private searchService: searchServices) {
    this.searchService.searchModel$.subscribe({
      next: (value) => {
        this.allItems = [];

        this.loading = true;
        value.articles.forEach((it) => {
          let item = { ...it, tableType: 1 };
          this.allItems.push(item);
        });
        value.products.forEach((it) => {
          let item = { ...it, tableType: 6 };
          this.allItems.push(item);
        });
        value.brokers.forEach((it) => {
          let item = { ...it, tableType: 36 };
          this.allItems.push(item);
        });
        value.calendarEvents.forEach((it) => {
          let item = { ...it, tableType: 34 };
          this.allItems.push(item);
        });
        this.showingItem = this.allItems;
        this.loading = false;
      },
    });
  }
  tableTypeIdentifier(type: number,browserTitle:string) {
    let route = ''
    switch(type) {
      case 1:
        route = `articles/${browserTitle}/fa`
        break;
      case 6:
        route = 'shop/atm-expert'
        break;
      case 36:
        route = `brokers/${browserTitle}`
        break;

    }
    return route
  }
}
