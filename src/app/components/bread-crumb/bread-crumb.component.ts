import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IMenuItem } from 'src/app/classes/interfaces/menu-item';
import { NavigationService } from 'src/app/classes/services/navigation.service';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent {

  breadCrumb : Array<IMenuItem> = new Array<IMenuItem>;
  url: string | undefined;
  route: any;
  hideBreadCrumb : boolean;
  nameRoute : string;
  pageTitle : any;
  lastIndex : boolean;

constructor(
  private _router: Router,
  private _title : Title,
  private navigation: NavigationService
  ){

    
  }
  ngOnInit(){   
    this.pushRoute();
  }

  pushbreadCrumb(){
    
    this.navigation.defaultMenu.forEach((it) => {
      this.breadCrumb.push(it);

      if (it.path == this.route){
        this.nameRoute = it.name;
        this.url == it.path;
      }
      else {

        if (this.route == this.navigation.defaultMenu[1].path){
          this.nameRoute = this.navigation.defaultMenu[1].name;
          this.url = this.navigation.defaultMenu[1].path;
        }
        if (this.route?.startsWith('brokers')){
          this.nameRoute = this.navigation.defaultMenu[2].name;
          this.url = this.navigation.defaultMenu[2].path;
        }
        if (this.route?.startsWith('economic-calendar')){
          this.nameRoute = this.navigation.defaultMenu[3].name;
          this.url = this.navigation.defaultMenu[3].path;
        }
        if(this.route == 'expert-advisor' || this.route == 'money-management'){
          this.nameRoute = this.navigation.defaultMenu[4].name;
          this.url = undefined;
        }
        if (this.route?.startsWith('articles')){
          this.nameRoute = this.navigation.defaultMenu[5].name;
          this.url = this.navigation.defaultMenu[5].path;
        }

      }
    });
    
  }

  pushRoute(){
      this._router.events.subscribe({
        next: (event) => {
          if(event instanceof NavigationEnd) {
            this.route = event.urlAfterRedirects.slice(1);
            if(this.route == ''){
              this.hideBreadCrumb = true;
            }
            else{
              this.hideBreadCrumb = false;
            }
            this.pushTitle();
            this.pushbreadCrumb();
          }
        }
      });   
  }

  pushTitle(){
    let persianPath = this.navigation.defaultMenu.find(it=> it.path == this.route)?.name;
    if(persianPath) {                            
      this.pageTitle = "";
      this.lastIndex = true;
    }
    else {
      this.lastIndex = false;
      setTimeout(() => {
        this.pageTitle = this._title.getTitle();
      },2500)  
    }
  }
}
