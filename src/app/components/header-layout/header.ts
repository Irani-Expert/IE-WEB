import { IMenuItem } from 'src/app/classes/menu-item';
import { NavigationService } from 'src/app/classes/services/navigation.service';
import { PlatformService } from 'src/app/classes/services/platform.service';
export abstract class Header {
  selectedItem: IMenuItem | undefined;
  items: IMenuItem[] = [];
  constructor(
    public navService: NavigationService,
    public platform: PlatformService
  ) {
    this.navService.menuItems$.subscribe((items) => {
      this.items = items;
      this.setActiveFlag();
    });
  }
  setActiveMainItem(item: IMenuItem) {
    this.items.forEach((i) => {
      i.active = false;
    });
    item.active = true;
  }
  setActiveFlag() {
    if (this.platform.isPlatformBrowser()) {
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
