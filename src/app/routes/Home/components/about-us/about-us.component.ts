import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  animations: [
    // Animation definition
    trigger('fadeInAnimation', [
      state('show', style({ opacity: 1 })), // Visible state
      state('hide', style({ opacity: 0, display: 'none' })), // Hidden state
      transition('* => *', animate('500ms ease-out')), // Animation duration and easing
    ]),
  ],
})
export class AboutUsComponent {
  // private activatedRoute: ActivatedRoute
  constructor(private _meta: Meta) {
    this._meta.addTag({
      name: 'description',
      content: '',
    });
    this._meta.addTag({
      name: 'author',
      content: '',
    });
    this._meta.addTag({
      name: 'keywords',
      content: '',
    });
  }
  ngOnInit() {
    // var location = this.activatedRoute.snapshot.queryParams['location'];
    // if (location == 'userSatisfaction') {
    //   let element = document.getElementById('userSatisfaction');
    //   element?.scrollIntoView({ behavior: 'smooth' });
    // }
  }
  // buttonText = 'باز کردن لیست پخش';
  // isVideoOpend: boolean = false;
  // openVideoList() {
  //   this.isVideoOpend = !this.isVideoOpend;
  // }
}
