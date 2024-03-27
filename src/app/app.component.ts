import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PlatformService } from './classes/services/platform.service';

import { AuthService } from './shared/auth/auth.service';
import { Header } from './components/header-layout/header';
import { Utils } from './classes/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  trade = false;
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
    if (AppComponent.isBrowser.value) Utils.scrollTopWindow();
  }
  static changeMainBg(type: 'white' | 'creamy') {
    if (AppComponent.isBrowser.value) {
      let main = document.body.getElementsByTagName('main')[0];

      let mainClass = main.classList;

      if (type == 'creamy') {
        mainClass.remove('bg-white');
        main.className = `${mainClass} bg-[#FAFAFA]`;
      } else {
        mainClass.remove('bg-[#FAFAFA]');
        main.className = `${mainClass} bg-white`;
      }
    }
  }
  ngAfterViewInit() {}
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
