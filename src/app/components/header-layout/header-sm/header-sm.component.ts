import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { Header } from '../header';
import { NavigationService } from 'src/app/classes/services/navigation.service';
import { Utils } from 'src/app/classes/utils';
import { ModalService } from 'src/app/shared/modal/services/modal.service';
import { AppComponent } from 'src/app/app.component';
import { HeaderLayoutComponent } from '../header-layout.component';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-header-sm',
  templateUrl: './header-sm.component.html',
  styleUrls: ['./header-sm.component.scss'],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          opacity: 0,
          // transform: 'translateX(200%)',
        })
      ),
      state(
        'out',
        style({
          opacity: 1,
          // transform: 'translateX(25%)',
        })
      ),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
    ]),
  ],
})
export class HeaderSmComponent extends Header {
  // ===========[آواتار]=====
  user$;
  panelUrl = '';
  username: string;
  // ========
  logout() {
    throw new Error('Method not implemented.');
  }
  @Output('modal') openingModal: EventEmitter<string> = new EventEmitter(false);
  constructor(
    navService: NavigationService,
    private modal: ModalService,
    private auth: AuthService
  ) {
    super(navService);
    this.user$ = this.auth.userSubject.asObservable();
  }

  link: number = 1;
  activeNavBar: boolean = false;
  menuState: string = 'in';
  
   ngOninit() {
    this.updateMenu();

  }

  openandClose() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
  choosenLink(id: number) {
    this.link = id;
    this.menuState = 'in';
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateMenu();
  }

  updateMenu() {
    if (AppComponent.isBrowser.value) {
      if (!Utils.isLaptopSm()) {
        this.menuState = 'in';
      }
    }
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
    
    this.user$.subscribe({
      next: async (val) => {
        if (val.token !== '') {
          this.username = val.firstName + ' ' + val.lastName
          this.panelUrl = `https://panel.iraniexpert.com/#/checkUserPermission?token=${val.token}`;
        }
      },
    });
    console.log(this.username);
  }

  // get panelUrl() {
  //   if (AuthService.loggedIn) {
  //     return `https://panel.iraniexpert.com/#/checkUserPermission?token=${this.auth._user.token}`;
  //   } else {
  //     return '';
  //   }
  // }

  zIndex : boolean = false;
  menuOpen(){
    this.zIndex = true;
  }
  menuClose(){
    this.zIndex = false;
  }
}
