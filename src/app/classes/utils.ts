export class Utils {
  static isMobileS() {
    return window && window.matchMedia('(max-width: 319px)').matches;
  }
  static isMobileM() {
    return window && window.matchMedia('(max-width: 376px)').matches;
  }
  static isMobileL() {
    return window && window.matchMedia('(max-width: 424px)').matches;
  }
  static isTablet() {
    return window && window.matchMedia('(max-width: 767px)').matches;
  }
  static isLaptopSm() {
    return window && window.matchMedia('(max-width: 1023px)').matches;
  }
  static isLaptopLg() {
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
