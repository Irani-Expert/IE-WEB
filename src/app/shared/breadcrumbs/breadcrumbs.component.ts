import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouteService } from 'src/app/classes/services/route.service';
import { Subscription } from 'rxjs';
import { NavigationService } from 'src/app/classes/services/navigation.service';
import { IBreadcumbs } from './breadcumbs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  // // }

  browserUrl: IBreadcumbs[] = new Array<IBreadcumbs>();
  routedoSubscription: Subscription;
  persianroute: string;
  persianNameOfRoute: string;
  routeInfoModel: IBreadcumbs[] = new Array<IBreadcumbs>();
  autoUnderRoute: boolean = false;
  constructor(
    location: Location,
    router: Router,
    routePersianName: RouteService,
    private navigation: NavigationService
  ) {
    routePersianName.liveRoute.subscribe((data: any) => {
      this.persianNameOfRoute = data['routename'];

      // var strRoute: string[] = location
      //   .prepareExternalUrl(location.path())
      //   .split('/')
      //   .filter((str) => str !== '');
      // console.log(strRoute);
      // // this.persianroute = data;
      // // if (this.persianroute['routename'] != 'data') {
      // //   this.persianroute['routename'] = 'data';
      // //   this.setBreadcrumbs(strRoute);
      // // }
    });
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        var strRoute: string[] = location
          .prepareExternalUrl(location.path())
          .split('/')
          .filter((str) => str !== '' && !str.includes('?') && str.length > 2);
        this.convertRouteToPersian(strRoute);
      }
    });
  }

  convertRouteToPersian(str: string[]) {
    this.browserUrl = [];
    str.forEach(async (x) => {
      var data: IBreadcumbs = {
        route: '',
        persianRoute: Promise.resolve(''),
        url: '',
      };
      data.route = x;

      data.persianRoute = this.getPersianRoute(x);

      data.url = this.getLink(str, x);

      this.browserUrl.push(data);
    });
  }
  async getPromise() {}
  async getPersianRoute(route: string) {
    var defaultMenu = this.navigation.defaultMenu;
    var index = defaultMenu.findIndex((x) => x.path == route);

    if (index == -1) {
      return new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve(this.persianNameOfRoute);
        }, 2000);
      });
    } else if (defaultMenu[index]?.name != undefined) {
      return Promise.resolve(defaultMenu[index].name);
    } else return Promise.resolve(route);
  }
  getLink(routes: string[], route: string) {
    var url = '';
    var stop = false;
    routes.forEach((link) => {
      if (stop) return;
      url += '/' + link;
      if (link == route) {
        stop = true;
      }
    });
    return url;
  }
  // setBreadcrumbs(urlAddresss: string[]) {
  //   this.browserUrl = urlAddresss;
  //   this.browserUrl = this.browserUrl.filter((str) => str !== '');

  //   this.browserUrl.forEach((x) => {
  //     if (
  //       (x == 'articles' || x == 'shop') &&
  //       this.persianroute['routename'] != 'data'
  //     ) {
  //       this.persianRoute();
  //     }
  //   });
  // }
  // persianRoute() {
  //   var mainTitle = this.browserUrl[0];
  //   this.browserUrl = [];
  //   this.browserUrl.push(mainTitle);
  //   this.browserUrl.push(this.persianroute['routename']);
  // }
}
