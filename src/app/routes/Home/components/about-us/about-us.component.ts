import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
// import { Meta } from '@angular/platform-browser';
// import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LinkService } from 'src/app/classes/services/link.service';

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
  // private _meta: Meta
  constructor(private _linkService: LinkService) {
    this._linkService.createLink(`https://www.iraniexpert.com/about-us`);
    // // this._meta.addTag({
    // //   name: 'description',
    // //   content: '',
    // // });
    // // this._meta.addTag({
    // //   name: 'author',
    // //   content: '',
    // // });
    // this._meta.addTag({
    //   name: 'keywords',
    //   content:
    //     'دستیار ترید,بهترین اکسپرت معامله گر,معامله با ربات کپی ترید, ربات هوش مصنوعی برای ترید, خرید اکسپرت ترید تضمینی, ربات سفارشی قطعا سودده, ربات تریدر رایگان,معامله گری خودکار, ربات خودکار,  بهترین ربات خودکار برای ایرانیان, ',
    // });
    AppComponent.changeMainBg('creamy');
  }
  ngOnInit() {
    // var location = this.activatedRoute.snapshot.queryParams['location'];
    // if (location == 'userSatisfaction') {
    //   let element = document.getElementById('userSatisfaction');
    //   element?.scrollIntoView({ behavior: 'smooth' });
    // }
  }
  ngOnDestroy() {
    AppComponent.changeMainBg('white');
  }
  // buttonText = 'باز کردن لیست پخش';
  // isVideoOpend: boolean = false;
  // openVideoList() {
  //   this.isVideoOpend = !this.isVideoOpend;
  // }

  get isBrowser() {
    return AppComponent.isBrowser.value;
  }
}
