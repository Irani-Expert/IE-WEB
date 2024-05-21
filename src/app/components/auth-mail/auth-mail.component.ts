import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-auth-mail',
  templateUrl: './auth-mail.component.html',
  styleUrls: ['./auth-mail.component.scss']
})
export class AuthMailComponent {
  route: any;

  constructor(
    private _router: Router,
    ){    
      this.gteUrl();      
    }

  ngOnInit(){
  }

// =========[get url]=======

gteUrl(){

  this._router.events.subscribe({
    next: (event) => {
      if(event instanceof NavigationEnd) {
        this.route = event.urlAfterRedirects;
      }
    }
  });

}

// =========[send url]=======
sendUrl(){
  this._router.navigateByUrl(``);
}
}
