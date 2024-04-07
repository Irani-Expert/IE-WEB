import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddScriptService {
  constructor(@Inject(DOCUMENT) private doc: Document) {}
  createScript(src: string, loc: 'head' | 'body' = 'head') {
    let script = this.doc.createElement('script');

    script.setAttribute('src', src);

    loc == 'head'
      ? this.doc.head.appendChild(script)
      : this.doc.body.appendChild(script);

    return script;
  }
  removeScript(script: any) {
    this.doc.head.removeChild(script);
  }
}
