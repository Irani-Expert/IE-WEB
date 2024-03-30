import { Component, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { NavigationService } from 'src/app/classes/services/navigation.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { ModalService } from 'src/app/shared/modal/services/modal.service';
import { Header } from '../header';
import { HeaderLayoutComponent } from '../header-layout.component';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs';


@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent extends Header {
  // ===========[آواتار]=====
  user$;
  panelUrl = '';
  username: string;

  // ========

  constructor(
    navService: NavigationService,
    private modal: ModalService,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private location: Location,
    private captureService: NgxCaptureService
  ) {
    super(navService);
    this.user$ = this.auth.userSubject.asObservable();

  }

  // ==========[به دست آوردن سایز]======
  @HostListener('window:resize', ['$event'])
  width : number;
  height : number;
  xImg : number;
  yImg : number;

  getSize(){
    let width = window.visualViewport?.width; 
    let height = window.visualViewport?.height; 
    this.width = width!;
    this.height = height!;
  }

  ngOninit() {
  }

hideMenu : boolean = true;
hideDiv : boolean = true;
dropDown : boolean = true;
imgScreen  = '';
dropDownItem : number = -1;

link: number = 1;



@Output('modal') openingModal: EventEmitter<string> = new EventEmitter(false);
@ViewChild('screen', { static: true }) screen: any;
choosenLink(id: number) {
  this.link = id;
}
// ===========[اسکرین شات و منو]===========
openMenu(){
  this.getSize();
  if(this.width > 769){
    this.xImg = -150;
    this.yImg = -100;
  }
  else {
    this.xImg = -250;
    this.yImg = 0;
  }
  this.captureService
  .getImage(document.body, false ,
    {
      x: this.xImg,
      y: this.yImg,
      width:800,
      height: 1280
    })
  .pipe(
    tap( (img: string) => {
      this.imgScreen = img;
      console.log(img);
    })
  )
  .subscribe();
  
  this.hideMenu = !this.hideMenu;
  
}

// ===========[دراپ دون]=====
dropDownMenu(index: number) {
  this.dropDownItem = index;
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
  
  this.user$.subscribe({
    next: async (val) => {
      if (val.token !== '') {
        this.username = val.firstName + ' ' + val.lastName
        this.panelUrl = `https://panel.iraniexpert.com/#/checkUserPermission?token=${val.token}`;
      }
    },
  });
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
