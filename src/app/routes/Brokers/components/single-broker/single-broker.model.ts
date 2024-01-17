export interface SingleBrokerUL {
  secondTitle: string;
  accountCent: boolean;
  telegramSupportLink: string;
  copyTrade: boolean;
  countryName: string;
  email: string;
  establishedYear: string;
  isIRSupport: boolean;
  isPersianSupport: boolean;
  leverage: string;
  minDeposit: string;
  phoneNumber: string;
  tradingSymbols: string;
  iranianRg?: string;
  mainReg?: string;
  deposit?: string;
}

export class SingleBrokerULModel implements SingleBrokerUL {
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
