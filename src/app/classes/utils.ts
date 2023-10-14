export class Utils {
  static isSmMobile() {
    return window && window.matchMedia('(max-width: 639px)').matches;
  }
  static isLgMobile() {
    return window && window.matchMedia('(max-width: 767px)').matches;
  }
  static isSmLaptop() {
    return window && window.matchMedia('(max-width: 1023px)').matches;
  }
  static isLgLaptop() {
    return window && window.matchMedia('(max-width: 1279px)').matches;
  }
  static scrollToTop(selector: string) {
    if (document) {
      const element = <HTMLElement>document.querySelector(selector);
      element.scrollTop = 0;
    }
  }
  static scrollTopWindow() {
    if (window) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }
  static scrollTracker() {
    return window && window.scrollY;
  }
}
