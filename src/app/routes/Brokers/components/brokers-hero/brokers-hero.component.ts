import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { BlogService } from 'src/app/classes/services/blog.service';

@Component({
  selector: 'brokers-hero',
  templateUrl: './brokers-hero.component.html',
  styleUrls: ['./brokers-hero.component.scss'],
})
export class BrokersHeroComponent {
  constructor(private _blogService: BlogService) {}

  ngAfterViewInit() {
    // this.brief = this._blogService._blog?.brief ? this._blogService._blog?.brief : ''
    // this.title = this._blogService._blog?.title ? this._blogService._blog?.title : 'بروکر چیست؟ آشنایی کامل با مفهوم بروکر فارکس'
  }

  get title() {
    if (this._blogService._blog?.title) {
      return this._blogService._blog.title;
    } else {
      return 'بروکر چیست؟ آشنایی کامل با مفهوم بروکر فارکس';
    }
  }
  get brief() {
    if (this._blogService._blog?.brief) {
      return this._blogService._blog?.brief;
    } else {
      return '';
    }
  }
  navTo() {
    if (AppComponent.isBrowser.value) {
      const element = document.getElementById('readMore');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
