import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BlogService } from 'src/app/classes/services/blog.service';

@Component({
  selector: 'app-rules-page',
  templateUrl: './rules-page.component.html',
  styleUrls: ['./rules-page.component.scss']
})
export class RulesPageComponent {

  articleHtml: SafeHtml;

  constructor(
    private blogService: BlogService,
    private _sanitizer : DomSanitizer
  ){
  }
  
  ngOnInit(){
  }

  async ngAfterViewInit() {
    if (await this.getBlog('rules-page', 'fa')) {
      this.articleHtml = this._sanitizer.bypassSecurityTrustHtml(
        this.blogService._blog!.description
      );
    }
  }

  async getBlog(title: string, language: string) {
    const apiRes = await this.blogService.getBlog(title, language);
    return apiRes;
  }
  
}
