import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/classes/interfaces/blog.interface';

@Component({
  selector: 'app-landing-article',
  templateUrl: './landing-article.component.html',
  styleUrls: ['./landing-article.component.scss'],
})
export class LandingArticleComponent {
  @Input() blogs: Blog[];
  constructor() {}
  routeLink(blog: Blog) {
    let browserTitle = blog.browserTitle;
    let lang = blog.isRTL ? 'fa' : 'en';
    return browserTitle + '/' + lang;
  }
}
