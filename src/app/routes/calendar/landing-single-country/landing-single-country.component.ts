import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-single-country',
  templateUrl: './landing-single-country.component.html',
  styleUrls: ['./landing-single-country.component.scss']
})
export class LandingSingleCountryComponent {




  // =======[ آیکون ها و تایتل های کارت ها ]=======
  groupCardPart1 = {
    type: 1,
    items: [
    {
      title : 'تولید ناخالص ملی',
      subTitle : 'نسبت به دوره قبل',
      icon : 'assets/icon/icon-card-2.svg'
    },
    {
      title : 'سرانه تولید ناخالص ملی',
      subTitle : 'نسبت به دوره قبل',
      icon : 'assets/icon/icon-card-2.svg'
    },
    {
      title : 'واردات',
      subTitle : 'نسبت به دوره قبل',
      icon : 'assets/icon/icon-card-1.svg'
    },
    {
      title : 'افزایش جمعیت',
      subTitle : 'نسبت به دوره قبل',
      icon : 'assets/icon/icon-card-3.svg'
    }
  ]};

  groupCardPart2 = {
    type: 2,
    items : [
      {
        id : 1,
        title : 'میزان بیکاری',
        subTitle1 : 'میزان بیکاری',
        subTitle2 : 'میزان اشتغال',
        icon : 'assets/icon/icon-card-4.svg'
      },
      {
        id : 2,
        title : 'افزایش تولید ناخالص ملی',
        subTitle1 : 'افزایش تولید ناخالص ملی',
        icon : 'assets/icon/icon-card-2.svg'
      }
    ]
  };
}
