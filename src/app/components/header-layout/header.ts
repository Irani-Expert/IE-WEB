import { AppComponent } from 'src/app/app.component';
import { IMenuItem } from 'src/app/classes/interfaces/menu-item';
import { NavigationService } from 'src/app/classes/services/navigation.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
export abstract class Header {
  static _btnDisabled: boolean = false;
  loggedIn$ = AuthService.loggedIn.asObservable();
  loggedIn = false;
  selectedItem: IMenuItem | undefined;
  items: IMenuItem[] = [];
  constructor(public navService: NavigationService) {
    this.loggedIn$.subscribe((res) => {
      this.loggedIn = res;
    });
    this.navService.menuItems$.subscribe((items) => {
      this.items = items;
      this.setActiveFlag();
    });
  }
  get _btnDisabled() {
    return Header._btnDisabled;
  }
  setActiveMainItem(item: IMenuItem) {
    this.items.forEach((i) => {
      i.active = false;
    });
    item.active = true;
  }
  setActiveFlag() {
    if (AppComponent.isBrowser.value) {
      if (window && window.location) {
        const activeRoute = window.location.hash || window.location.pathname;
        this.items.forEach((item) => {
          item.active = false;
          if (activeRoute.indexOf(item.path!) !== -1) {
            this.navService.selectedItem = item;
            item.active = true;
          }
          if (item.sub) {
            item.sub.forEach((subItem) => {
              subItem.active = false;
              if (activeRoute.indexOf(subItem.path!) !== -1) {
                this.navService.selectedItem = item;
                item.active = true;
              }
            });
          }
        });
      }
    }
  }
  selectItem(item: IMenuItem) {
    this.navService.selectedItem = item;
    this.setActiveMainItem(item);
  }
}
