import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SchemaService {
  script: HTMLScriptElement;
  constructor(@Inject(DOCUMENT) private doc: Document) {}
  createScript(schema: any) {
    let script = this.doc.createElement('script');

    script.type = 'application/ld+json';
    script.innerHTML = this.getHtml(schema);
    let previousFirst = this.doc.body.querySelector('noscript')!;
    previousFirst.after(script);
  }

  getHtml(schema: any) {
    let html;
    html = schema ? JSON.stringify(schema, null, 2) : '';

    return html;
  }
  removeScript() {
    this.doc.body.removeChild(this.script);
  }
}
