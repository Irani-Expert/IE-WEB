import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BlogService } from 'src/app/classes/services/blog.service';

@Component({
  selector: 'app-calendar-describtion',
  templateUrl: './calendar-describtion.component.html',
  styleUrls: ['./calendar-describtion.component.scss']
})
export class CalendarDescribtionComponent {
  sendDataToChild = false;
  title: string = '';
  language: string = '';
  id: number = 0;
  articleHtml: SafeHtml;
  
  constructor(public blogService : BlogService , private _sanitizer : DomSanitizer){}

  async ngAfterViewInit() {
    if (await this.getDetail('calendar', 'fa')) {

      this.id = Number(this.blogService._blog?.id);
      this.articleHtml = this._sanitizer.bypassSecurityTrustHtml(
        this.blogService._blog!.description
      );

      this.sendDataToChild = true;
    }
  }

  async getDetail(title: string, language: string) {
    const apiRes = await this.blogService.getBlog(title, language);
    return apiRes;
  }
}
