import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PlatformService } from './classes/services/platform.service';
// import { ModalService } from './shared/modal/services/modal.service';
import { AuthService } from './shared/auth/auth.service';
import { Header } from './components/header-layout/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // modalStatus;
  static isBrowser = new BehaviorSubject<boolean>(false);
  title = 'IE-WEB';
  constructor(
    private platform: PlatformService,
    // private modal: ModalService,
    private auth: AuthService
  ) {
    // this.modalStatus = this.modal.modalStatusSubject;
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
