import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PlatformService } from './classes/services/platform.service';

import { AuthService } from './shared/auth/auth.service';
import { Header } from './components/header-layout/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  lottieConfig = {
    width: '50vw',
    height: 'auto',
    path: './assets/lottie/loader.json',
  };
  static loaderSubject = new BehaviorSubject(false);

  // modalStatus;
  static isBrowser = new BehaviorSubject<boolean>(false);
  title = 'IE-WEB';
  constructor(private platform: PlatformService, private auth: AuthService) {
    if (this.platform.isPlatformBrowser()) {
      AppComponent.isBrowser.next(true);
    }
  }
  async ngOnInit() {
    if (AppComponent.isBrowser.value) {
      Header._btnDisabled = true;
      let res = await this.auth.checkValidToken();
      if (res[0]) {
        Header._btnDisabled = false;
        this.auth.rememberUser(res[1]);
      } else {
        Header._btnDisabled = false;
        this.auth.logOutUser();
      }
    }
  }
  get httpLoader() {
    return AppComponent.loaderSubject.value;
  }
  get _platformValue() {
    return AppComponent.isBrowser.value;
  }
  onActivate(_event: any) {
    if (AppComponent.isBrowser.value)
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
  }
}

// Get Blogs
// loading = true;
// async getBlogs(filter: IFilterBlog) {
//   (
//     await this.blog.getBlogsFromApi('Article/GetArticleByFilter', filter)
//   ).subscribe({
//     complete: () => {
//       this.loading = false;
//     },
//   });
// }

// Get Products
// async getProducts(filter: IFilterProduct) {
//   let res = await lastValueFrom(
//     await this.prdService.getProducts('Product/GetProductByFilters', filter)
//   );
//   if (res) {
//     console.log(await this.prdService.getProduct(1));
//   }
// }
