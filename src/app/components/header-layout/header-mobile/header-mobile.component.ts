import {
  Component,
  EventEmitter,
  HostListener,
  Output,
  ViewChild,
} from '@angular/core';
import { NavigationService } from 'src/app/classes/services/navigation.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { ModalService } from 'src/app/shared/modal/services/modal.service';
import { Header } from '../header';
import { HeaderLayoutComponent } from '../header-layout.component';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { Subject, Subscription, debounceTime, tap } from 'rxjs';
import { style, transition, trigger, animate } from '@angular/animations';
import { BlogService } from 'src/app/classes/services/blog.service';
import { ITags } from 'src/app/classes/interfaces/tags.interface';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
  styleUrls: ['./header-mobile.component.scss'],
})
export class HeaderMobileComponent extends Header {
  // ===========[آواتار]=====
  user$;
  panelUrl = '';
  username: string;

  // ========

  constructor(
    navService: NavigationService,
    public _articleServices: BlogService,
    private modal: ModalService,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private location: Location,
    private captureService: NgxCaptureService
  ) {
    super(navService);
    this.user$ = this.auth.userSubject.asObservable();

    this.user$.subscribe({
      next: async (val) => {
        if (val.token !== '') {
          this.username = val.firstName + ' ' + val.lastName;
          this.panelUrl = `https://panel.iraniexpert.com/#/checkUserPermission?token=${val.token}`;
        }
      },
    });
  }

  // ==========[به دست آوردن سایز]======
  width: number;
  height: number;
  xImg: number;
  yImg: number;

  @HostListener('window:resize', ['$event'])
  getSize() {
    if (AppComponent.isBrowser.value) {
      let width = window.visualViewport?.width;
      let height = window.visualViewport?.height;
      let yScroll = window.scrollY;
      this.yImg = yScroll;
      this.width = width!;
      this.height = height!;
    }
  }

  @HostListener('window:resize', ['$event'])
  ngOnInit() {
    
    let width: any;
    if (AppComponent.isBrowser.value) {
      width = window.visualViewport?.width;

      if (width > 1023) {
        document.body.classList.remove('overflow-hidden');
      }

      this._searchInputSubscription = this._searchinput
        .pipe(debounceTime(700))
        .subscribe((value) => {
          this.searchFilterName(value);
        });
    // ===========[اسکرین شات]===========

      // setInterval(() => {
      //   this.getSize();

      //   if (this.hideMenu == true) {
      //     if (this.width > 769) {
      //       this.xImg = -150;
            // this.yImg = -100;
          // } else {
            // this.xImg = -250;
            // this.yImg = 0;
          // }
          // const canvas = document.createElement('canvas')
          // this.captureService
          //   .getImage(document.body, false, {
          //     x: this.xImg,
          //     y: this.yImg,
          //     width: 800,
          //     height: 1280,
          //   })
          //   .pipe(
          //     tap((img: string) => {
                // if (this.hideMenu == true) {
                // this.imgScreen = img;
                // }
                // } else {
                //   this.imgScreen = '';
                // }
      //         })
      //       )
      //       .subscribe();
      //   }
      // }, 500);
    }
  }

  hideMenu: boolean = true;
  hideDiv: boolean = true;
  dropDown: boolean = true;
  imgScreen = '';
  dropDownItem: number = -1;

  link: number = 1;

  @Output('modal') openingModal: EventEmitter<string> = new EventEmitter(false);
  @ViewChild('screen', { static: true }) screen: any;
  choosenLink(id: number) {
    this.link = id;
  }
  // ===========[منو]===========
  openMenu() {
    document.body.classList.add('overflow-hidden');
    this.getSize();

      if (this.width > 769) {
        this.xImg = -150;
        // this.yImg = -100;
      } else {
        this.xImg = -250;
        // this.yImg = 0;
      }
      // const canvas = document.createElement('canvas')
      this.captureService
        .getImage(document.body, false, {
          x: this.xImg,
          y: this.yImg,
          width: 800,
          height: 1280,
        })
        .pipe(
          tap((img: string) => {
            // if (this.hideMenu == true) {
            this.imgScreen = img;
            // } else {
            //   this.imgScreen = '';
            // }
          })
        )
        .subscribe();

    this.hideMenu = !this.hideMenu;
  }

  closeMenu() {
    this.hideMenu = true;
    document.body.classList.remove('overflow-hidden');
  }
  // =============[روت]========
  clickRoute(activeRoute: boolean | undefined, index: number) {
    if (activeRoute == true) {
      this.closeMenu();
      this.items[index].active = !this.items[index].active;
    } else {
      this.hideMenu = false;
    }
  }

  // =============[سرچ]========
  hideSearch: boolean = true;
  _searchInputSubscription: Subscription;
  _searchinput: Subject<string> = new Subject<string>();

  openSearch() {
    this.hideSearch = false;
  }

  closeSearh() {
    this.hideSearch = true;
  }

  fillValue(value: string) {
    this._searchinput.next(value);
  }

  searchFilterName(value: string) {
    if (value.length <= 2) {
      this.toastr.error('حداقل باید 3 کاراکتر باید برای سرچ ارسال گردد');
    } else {
      this.router.navigateByUrl(`search?search=${value}`);
      this.hideMenu = !this.hideMenu;
      this.hideSearch = true;
    }
  }
  // ===========[هشتگ ها]=====
  sendDataToChild = false;
  title: string = '';
  language: string = '';
  tagsMenu: ITags[];

  async ngAfterViewInit() {
    let sub = this._articleServices.singleBlog
      .asObservable()
      .subscribe((item) => {
        if (item) {
          this.tagsMenu = [...item.sharpLinkTags];
          this.sendDataToChild = true;
          sub.unsubscribe();
        }
      });
  }

  // async getDetail(title: string, language: string) {
  //   const apiRes = await this._articleServices.getBlog(title, language);
  //   return apiRes;
  // }

  searchTag(searchingTag: string) {
    searchingTag = searchingTag.slice();
    this.router.navigateByUrl(`search?search=${searchingTag}`);
    this.hideMenu = !this.hideMenu;
    this.hideSearch = true;
  }
  // ===========[دراپ دون]=====
  dropDownIcon: boolean;

  dropDownMenu(index: number) {
    this.dropDownItem = index;
    this.items[index].active = !this.items[index].active;
  }

  // =======[مدال لاگین]========
  openModal(type: string) {
    this.openingModal.emit(type);
    this.modal.open().subscribe({
      next: (action) => {
        console.log(action);
      },
      complete: () => {
        HeaderLayoutComponent.modalStatus = false;
      },
    });
    HeaderLayoutComponent.modalStatus = true;
  }
  // =======[ خروج از حساب کاربری]========

  logout() {
    this.auth.logOutUser();
    this.toastr.show('از حساب کاربری با موفقیت خارج شدید', 'خروج موفق', {
      positionClass: 'toast-top-left',
      progressBar: true,
      closeButton: true,
      toastClass: 'ngx-toastr toast-logged-out',
    });
    if (this.router.url.includes('checkout')) {
      this.location.back();
    }
  }
}
