import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddScriptService {
  constructor(@Inject(DOCUMENT) private doc: Document) {}
  createScript(src: string) {
    let script = this.doc.createElement('script');

    script.setAttribute('src', src);
    this.doc.head.appendChild(script);

    return script;
  }
  removeScript(script: any) {
    this.doc.head.removeChild(script);
  }
}
