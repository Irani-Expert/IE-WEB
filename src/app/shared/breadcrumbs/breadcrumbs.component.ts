import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouteService } from 'src/app/classes/services/route.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  browserUrl: string[] = [];

  routedoSubscription: Subscription;
  persianroute: any;
  constructor(
    private location: Location,
    private router: Router,
    private routePersianName: RouteService
  ) {
    this.routedoSubscription = this.routePersianName.liveRoute.subscribe(
      (data) => {
        this.persianroute = data;
        if (this.persianroute['routename'] != 'data') {
          this.setBreadcrumbs(
            this.location.prepareExternalUrl(this.location.path())
          );
        }
      }
    );
    router.events.subscribe((val) => {
      this.persianroute['routename'] = 'data';
      this.setBreadcrumbs(location.prepareExternalUrl(location.path()));
    });
  }
  ngOnInit() {}
  setBreadcrumbs(urlAddresss: string) {
    this.browserUrl = urlAddresss.split('/');
    this.browserUrl = this.browserUrl.filter((str) => str !== '');

    this.browserUrl.forEach((x) => {
      if (x == 'articles' && this.persianroute['routename'] != 'data') {
        this.persianRoute();
      }
    });
  }
  persianRoute() {
    var mainTitle = this.browserUrl[0];
    this.browserUrl = [];
    this.browserUrl.push(mainTitle);
    this.browserUrl.push(this.persianroute['routename']);
  }
}
