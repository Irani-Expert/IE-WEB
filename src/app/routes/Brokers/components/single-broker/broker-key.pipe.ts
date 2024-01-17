import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'borkerKey' })
export class BrokerKeyPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    let result = '';
    switch (value) {
      case 'accountCent':
        result = 'حساب سنت Cent';
        break;
      case 'secondTitle':
        result = 'نام بروکر';
        break;
      case 'telegramSupportLink':
        result = 'پشتیبان تلگرام';
        break;
      case 'isPersianSupport':
        result = 'پشتیبان فارسی';
        break;
      case 'establishedYear':
        result = 'سال تاسیس';
        break;
      case 'phoneNumber':
        result = 'تلفن';
        break;
      case 'countryName':
        result = 'دفتر مرکزی';
        break;
      case 'email':
        result = 'ایمیل';
        break;
      case 'mainReg':
        result = 'رگوله اصلی';
        break;
      case 'iranianRg':
        result = 'رگوله برای ایرانیان';
        break;
      case 'minDeposit':
        result = 'حداقل واریزی';
        break;
      case 'leverage':
        result = 'حداکثر لوریج';
        break;
      case 'tradingSymbols':
        result = 'نماد های معاملاتی';
        break;
      case 'deposit':
        result = 'واریز و برداشت';
        break;
      case 'copyTrade':
        result = 'کپی تریدینگ';
        break;
      case 'isIRSupport':
        result = 'خدمات به ایران';
        break;
    }
    return result;
  }
}
