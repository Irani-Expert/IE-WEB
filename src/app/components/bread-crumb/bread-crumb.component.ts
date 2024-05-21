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
  url: string;
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
    this.pushbreadCrumb();
    this.pushRoute();
  }

  pushbreadCrumb(){
    this.navigation.defaultMenu.forEach((it) => {
      this.breadCrumb.push(it);
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
          }
        }
      });      
  }

  pushTitle(){
    let persianPath = this.navigation.defaultMenu.find(it=> it.path == this.route)?.name;
    if(persianPath) {                            
      this.pageTitle = "";
      console.log("این شرط صحیح است");
      this.lastIndex = true;
    }
    else {
      console.log("این شرط غلط است");
      this.lastIndex = false;
      setTimeout(() => {
        this.pageTitle = this._title.getTitle();
      },2500)  
    }
  }
}
