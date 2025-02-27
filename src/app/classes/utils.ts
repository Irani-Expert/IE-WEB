import { formatDate } from '@angular/common';

export class Utils {
  static isMobileS() {
    return window && window.matchMedia('(max-width: 376px)').matches;
  }
  static isMobileM() {
    return window && window.matchMedia('(max-width: 424px)').matches;
  }
  static isMobileL() {
    return window && window.matchMedia('(max-width: 767px)').matches;
  }
  static isTablet() {
    return window && window.matchMedia('(max-width: 1023px)').matches;
  }
  static isLaptopSm() {
    return window && window.matchMedia('(max-width: 1279px)').matches;
  }
  static isLaptopLg() {
    return window && window.matchMedia('(max-width: 2340px)').matches;
  }
  static is4k() {
    return window && window.matchMedia('(max-width: 7679px )').matches;
  }

  static scrollToView(
    selector: string,
    behavior: 'smooth' | 'instant' = 'instant'
  ) {
    if (document) {
      const element = document.getElementById(selector)!;
      element.scrollIntoView({ behavior: behavior });
    }
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
  static isScrolled() {
    let scroll = false;
    window.onscroll = function (e) {
      scroll = true;
    };
    return scroll;
  }
  static focusOnElement(id: any) {
    if (document) {
      <HTMLElement>(<unknown>document.getElementById(id)!.focus());
    }
  }
  static changeFormatDate(date: any) {
    let getDate = formatDate(date, 'yyyy.MM.dd', 'en-US');
    return getDate;
  }
}
