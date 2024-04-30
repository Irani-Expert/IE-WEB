import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-calendar-description',
  templateUrl: './calendar-description.component.html',
  styleUrls: ['./calendar-description.component.scss']
})
export class CalendarDescriptionComponent {

  @Input('data') data : any;
  
  title: string = '';
  language: string = '';
  id: number = 0;
  articleHtml: SafeHtml;
  
  constructor(
     private _sanitizer : DomSanitizer){}

  async ngAfterViewInit() {
    this.articleHtml = this._sanitizer.bypassSecurityTrustHtml(
      this.data.description
    );
  }

}
