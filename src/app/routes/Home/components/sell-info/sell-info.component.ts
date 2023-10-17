import { Component } from '@angular/core';
@Component({
  selector: 'app-sell-info',
  templateUrl: './sell-info.component.html',
  styleUrls: ['./sell-info.component.scss'],
})
export class SellInfoComponent {
  public val: Array<sellInfo> = [
    { number: 70, title: 'وین ریت' },
    { number: 5, title: 'ماکسیموم درادون' },
    { number: 22, title: 'سود ماه قبل' },
    { number: 200, title: 'حساب های فعال' },
  ];
  ngOnInit() {}

  choosenSlide: number = 1;
  changeSlide(slide: any) {
    this.choosenSlide = slide;
  }
}
export class sellInfo {
  title!: string;
  number!: number;
}
