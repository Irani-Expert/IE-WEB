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
  hide : boolean;
  nameRoute : string;
  pageTitle : any;

constructor(
  private _router: Router,
  private _title : Title,
  private navigation: NavigationService
  ){

    
  }
  ngOnInit(){   
    this.pushbreadCrumb();
  }

  pushbreadCrumb(){
    this.navigation.defaultMenu.forEach((it) => {
      
      this._router.events.subscribe({
        next: (event) => {
          if(event instanceof NavigationEnd) {
            this.route = event.urlAfterRedirects.slice(1);
            // console.log(this.route);
            

            // if (it.path == this.route){
              //   this.nameRoute = it.name;              
              // }
              if (it.path == this.route){
              this.breadCrumb.push(it);
              this.hide = true;
            }
            else {
              this.hide = false;
              setTimeout(() => {
                this.pageTitle = this._title.getTitle();
              },2000)  
            }

          }
        }
      })

    });      
  }
}
