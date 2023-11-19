import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  cannonicalLink: HTMLLinkElement | undefined;
  constructor(@Inject(DOCUMENT) private doc: Document) {}
  createLink(shortnedLink: string) {
    if (this.cannonicalLink) {
      this.removeLink();
    }
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', shortnedLink);
    this.doc.head.appendChild(link);
    this.cannonicalLink = link;
  }
  removeLink() {
    if (this.cannonicalLink) {
      this.doc.head.removeChild(this.cannonicalLink);
    }
  }

  public get canonicalLinkValue() {
    if (this.cannonicalLink) return this.cannonicalLink;
    else return new HTMLLinkElement();
  }
}
