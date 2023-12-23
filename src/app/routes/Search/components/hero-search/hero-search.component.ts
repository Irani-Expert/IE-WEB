import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent {
  // ===========[تگ ها]======
  ngOnInit(){
    this.toggle(0);
  }
  
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
      name :'مقالات',
      id : 6,
      active: false,
    },
    {
      name :'مقالات',
      id : 7,
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
