import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { SingleBrokerUL } from './single-broker.model';
import { BrokerService } from '../../broker.service';
import { ActivatedRoute } from '@angular/router';
import { ApiBrokerModel } from './api-broker.model';
import { environment } from 'src/environments/environment.dev';
import { CurrencyPipe, KeyValue } from '@angular/common';
class SingleBrokerULModel implements SingleBrokerUL {
  secondTitle: string = '';
  isIRSupport: boolean = false;
  establishedYear: string = '';
  phoneNumber: string = '';
  countryName: string = '';
  email: string = '';
  mainReg: string = '';
  iranianRg: string = '';
  minDeposit: string = '';
  accountCent: boolean = false;
  leverage: string = '';
  tradingSymbols: string = '';
  deposit: string = '';
  telegramSupportLink: string = '';
  isPersianSupport: boolean = false;
  copyTrade: boolean = false;
}
@Component({
  selector: 'app-single-broker',
  templateUrl: './single-broker.component.html',
  styleUrls: ['./single-broker.component.scss'],
  providers: [CurrencyPipe],
})
export class SingleBrokerComponent {
  hoveredOnImg = false;
  platforms = '';
  originalOrder = (
    a: KeyValue<keyof SingleBrokerULModel, string | number | boolean>,
    b: KeyValue<keyof SingleBrokerULModel, string | number | boolean>
  ): number => {
    return 0;
  };
  contentUrl = environment.contentUrl;
  dataLoaded = false;
  apiData: ApiBrokerModel = new ApiBrokerModel();
  brokerData: SingleBrokerULModel = new SingleBrokerULModel();
  mainClass =
    'm-0 p-0 gap-0 flex flex-col min-h-screen overflow-hidden lg:overflow-y-hidden lg:overflow-x-auto';
  main: HTMLElement;
  title: string;
  constructor(
    public brokerService: BrokerService,
    private _state: ActivatedRoute,
    private _currencyPipe: CurrencyPipe
  ) {
    if (AppComponent.isBrowser.value) {
      this.main = document.body.getElementsByTagName('main')[0];
      this.main.className = `bg-white lg:bg-[#FAFAFA] ${this.mainClass}`;
    }
    this._state.url.subscribe(
      (it) => (this.title = it[0].path.split('_').join(' '))
    );
  }
  ngOnDestroy() {
    if (AppComponent.isBrowser.value) {
      this.main.className = this.mainClass;
    }
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
    this.dataLoaded = true;
  }
}
