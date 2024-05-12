import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scrollToElementById(id: string) {
    const element = this.__getElementById(id);
    this.scrollToElement(element);
  }

  private __getElementById(id: string): HTMLElement | any {
    
    const element = document.getElementById(id);
    return element;
  }

  scrollToElement(element: HTMLHeadingElement) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
