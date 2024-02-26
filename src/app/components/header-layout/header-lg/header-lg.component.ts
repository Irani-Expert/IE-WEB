import { Component, EventEmitter, Output } from '@angular/core';
import { IMenuItem } from 'src/app/classes/interfaces/menu-item';
import { NavigationService } from 'src/app/classes/services/navigation.service';
import { Header } from '../header';
import { ModalService } from 'src/app/shared/modal/services/modal.service';
import { HeaderLayoutComponent } from '../header-layout.component';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs';


@Component({
  selector: 'app-header-lg',
  templateUrl: './header-lg.component.html',
  styleUrls: ['./header-lg.component.scss'],
})

export class HeaderLgComponent extends Header {
  

  @Output('modal') openingModal: EventEmitter<string> = new EventEmitter(false);
  hoveredItem = -1;
  hoveredItemUser : boolean;
  hoveredItemUser2: boolean;
  hoveredItemUser3:boolean;

  user$;
  panelUrl = '';
  nav: IMenuItem[] = new Array<IMenuItem>();
  username: string;
  constructor(
    navService: NavigationService,
    private modal: ModalService,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private location: Location
  ) {
    super(navService);
    this.user$ = this.auth.userSubject.asObservable();
  }
  onHoverUser(){
    this.hoveredItemUser = true;
  }
  unHoverUser(){
    this.hoveredItemUser = false;
  }
  onHoverUser2(){
    this.hoveredItemUser2 = true;
  }
  unHoverUser2(){
    this.hoveredItemUser2 = false;
  }
  onHoverUser3(){
    this.hoveredItemUser3 = true;
  }
  unHoverUser3(){
    this.hoveredItemUser3 = false;
  }

  onHover(index: number) {
    this.hoveredItem = index;
  }
  unHovered() {
    this.hoveredItem = -1;
  }
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
    this.hoveredItemUser = false;

  }
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
  ngOnInit() {
    this.user$.subscribe({
      next: async (val) => {
        if (val.token !== '') {
          this.username = val.firstName + ' ' + val.lastName
          this.panelUrl = `https://panel.iraniexpert.com/#/checkUserPermission?token=${val.token}`;
        }
      },
    });
   
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((item) => {
        this.setActiveFlag();
      });
  }
}
