import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/classes/interfaces/blog.interface';

@Component({
  selector: 'app-landing-article-responsive',
  templateUrl: './landing-article-responsive.component.html',
  styleUrls: ['./landing-article-responsive.component.scss'],
})
export class LandingArticleResponsiveComponent {
  @Input() blogs: Blog;
  routeLink() {
    let browserTitle = this.blogs.browserTitle;
    let lang = this.blogs.isRTL ? 'fa' : 'en';
    return browserTitle + '/' + lang;
  }
}
