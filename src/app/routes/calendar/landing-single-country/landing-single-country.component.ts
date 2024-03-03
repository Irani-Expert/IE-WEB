import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinkService } from 'src/app/classes/services/link.service';

@Component({
  selector: 'app-landing-single-country',
  templateUrl: './landing-single-country.component.html',
  styleUrls: ['./landing-single-country.component.scss'],
})
export class LandingSingleCountryComponent {
  title: string = '';
  language: string = '';

  constructor(
    private _state: ActivatedRoute,
    private _linkService: LinkService
  ) {
    this._state.url.subscribe((it) => {
      this.title = it[0].path.split('_').join(' ');
    });
  }

  ngOnInit() {
    this._linkService.createLink(
      `https://www.iraniexpert.com/economic-calendar/${this.title}`
    );
  }

  // =======[ آیکون ها و تایتل های کارت ها ]=======
  groupCardPart1 = {
    type: 1,
    items: [
      {
        title: 'تولید ناخالص ملی',
        subTitle: 'نسبت به دوره قبل',
        icon: 'assets/icon/icon-card-2.svg',
      },
      {
        title: 'سرانه تولید ناخالص ملی',
        subTitle: 'نسبت به دوره قبل',
        icon: 'assets/icon/icon-card-2.svg',
      },
      {
        title: 'واردات',
        subTitle: 'نسبت به دوره قبل',
        icon: 'assets/icon/icon-card-1.svg',
      },
      {
        title: 'افزایش جمعیت',
        subTitle: 'نسبت به دوره قبل',
        icon: 'assets/icon/icon-card-3.svg',
      },
    ],
  };

  groupCardPart2 = {
    type: 2,
    items: [
      {
        id: 1,
        title: 'میزان بیکاری',
        subTitle1: 'میزان بیکاری',
        subTitle2: 'میزان اشتغال',
        icon: 'assets/icon/icon-card-4.svg',
      },
      {
        id: 2,
        title: 'افزایش تولید ناخالص ملی',
        subTitle1: 'افزایش تولید ناخالص ملی',
        icon: 'assets/icon/icon-card-2.svg',
      },
    ],
  };
}
