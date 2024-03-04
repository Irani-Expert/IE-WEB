import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { SingleBrokerULModel } from './single-broker.model';
import { BrokerService } from '../../broker.service';
import { ActivatedRoute } from '@angular/router';
import { ApiBrokerModel } from './api-broker.model';
import { environment } from 'src/environments/environment.dev';
import { CurrencyPipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { DomSanitizer, Meta, SafeHtml, Title } from '@angular/platform-browser';
import { LinkService } from 'src/app/classes/services/link.service';
// import { GetAverageRGB } from 'src/app/classes/tranparent-img';
// import { base64Maker } from 'src/app/classes/base64Maker';

@Component({
  selector: 'app-single-broker',
  templateUrl: './single-broker.component.html',
  styleUrls: ['./single-broker.component.scss'],
  providers: [CurrencyPipe],
})
export class SingleBrokerComponent {
  brokerDescHtml: SafeHtml;
  hoveredOnImg = false;
  platforms = '';
  contentUrl = environment.contentUrl;
  dataLoaded = new BehaviorSubject(false);
  dataLoaded$ = this.dataLoaded.asObservable();
  apiData: ApiBrokerModel = new ApiBrokerModel();
  brokerData: SingleBrokerULModel = new SingleBrokerULModel();
  title: string;
  constructor(
    public brokerService: BrokerService,
    private _state: ActivatedRoute,
    private _currencyPipe: CurrencyPipe,
    private _sanitizer: DomSanitizer,
    private _meta: Meta,
    private _title: Title,
    private _linkService: LinkService
  ) {
    AppComponent.changeMainBg('creamy');
    this._state.url.subscribe(
      (it) => (this.title = it[0].path.split('_').join(' '))
    );
  }
  ngOnDestroy() {
    AppComponent.changeMainBg('white');
  }
  async ngOnInit() {
    this.brokerService.singleBroker$.subscribe((it) => {
      this.apiData = it;
    });
    if (await this.getDetails(this.title)) {
      this.setDataToUl(this.apiData);
    }
  }
  async getDetails(title: string) {
    return this.brokerService.getDetails(title);
  }
  setDataToUl(apiData: ApiBrokerModel) {
    this.setSeo(apiData);
    const tempData: any = { ...apiData };
    let keysOfULModel = Object.keys(this.brokerData);
    let keys: [keyof ApiBrokerModel] | string[] = Object.keys(tempData);

    keys.forEach((it) => {
      if (keysOfULModel.indexOf(it) == -1) {
        delete tempData[it];
      }
      // tempData.title;
      // tempData.id;
      // tempData.description;
      // tempData.orderID;
      // tempData.isActive;
      // tempData.updateDate;
      // tempData.createDate;
      // tempData.description;
      // tempData.createBy;
      // tempData.updateBy;
      // tempData.brief;
      // tempData.publishDate;
      // tempData.cardImagePath;
      // tempData.secondCardImagePath;
      // tempData.isRTL;
      // tempData.metaDescription;
      // tempData.browserTitle;
      // tempData.studyTime;
      // tempData.countryIcon;
      // tempData.authorAccepted;
      // tempData.managementAccepted;
      // tempData.seoAccepted;
      // tempData.referralLink;
      // tempData.staticRate;
      // tempData.sharpLinkTags;
      // tempData.linkTags;
      // tempData.faQs;
      // tempData.author;
      // tempData.items;
      // tempData.authorIconExists;
      // tempData.fileExists;
      // tempData.authorIconPath;
      // tempData.videoLink;
      // tempData.webSiteLink;
      // tempData.advantages;
      // tempData.disAdvantages;
    });
    apiData.items.forEach((it, counter) => {
      switch (it.brokerItemType) {
        case 0:
          counter == 0
            ? (this.brokerData.mainReg += `${it.title}`)
            : (this.brokerData.mainReg += `,${it.title}`);
          break;
        case 4:
          counter == 0
            ? (this.brokerData.iranianRg += `${it.title}`)
            : (this.brokerData.iranianRg += `,${it.title}`);
          break;
        case 3:
          counter == 0
            ? (this.brokerData.deposit += `${it.title}`)
            : (this.brokerData.deposit += `,${it.title}`);
          break;
        case 1:
          counter == 0
            ? (this.platforms += `${it.title}`)
            : (this.platforms += `,${it.title}`);
          break;
      }
    });

    Object.assign(this.brokerData, tempData);
    let minDepo = `${apiData.minDeposit}`;
    this.brokerData.minDeposit = this._currencyPipe.transform(
      minDepo,
      'USD',
      undefined,
      '1.1-2'
    )!;
    this.brokerData.leverage = `1:${apiData.leverage}`;
    this.brokerDescHtml = this._sanitizer.bypassSecurityTrustHtml(
      apiData.description
    );
    this.dataLoaded.next(true);
    // this.dataLoaded.complete();
  }
  // async transparentImg(id: number | string) {
  // setTimeout(() => {
  //   const imgEl = document.getElementById(`transparent-img-${id}`);
  //   if (imgEl instanceof HTMLImageElement) {
  //     // imgEl.
  //     imgEl.crossOrigin = 'anonymous';
  //     let imgBaseColor = GetAverageRGB(imgEl);
  //     console.log(imgBaseColor);
  //   }
  // }, 2000);
  // }
  setSeo(apiData = new ApiBrokerModel()) {
    let keywords = '';
    apiData.linkTags.forEach((item) => {
      keywords += `${item.title.replace(/#/g, '')},`;
    });

    this._meta.updateTag({
      name: 'description',
      content: apiData.metaDescription,
    });
    this._meta.updateTag({
      name: 'author',
      content: apiData.author,
    });
    this._meta.updateTag({
      name: 'keywords',
      content: keywords,
    });
    this._title.setTitle(apiData.title);
    const language = apiData.isRTL ? 'fa' : 'en';
    this._linkService.createLink(
      `https://www.iraniexpert.com/brokers/${apiData.browserTitle}/${language}`
    );
  }
}
