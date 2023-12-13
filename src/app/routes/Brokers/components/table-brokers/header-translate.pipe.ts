import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'translateHeader',
})
export class TranslateTableHeaders implements PipeTransform {
  transform(value: any, ...args: any[]) {
    switch (value) {
      case 'name':
        value = 'نام بروکر';
        break;
      case 'rate':
        value = 'امتیاز';
        break;
      case 'logoSrc':
        value = 'نماد تجاری';
        break;
      case 'establishedYear':
        value = 'سال تاسیس';
        break;
      case 'insurance':
        value = 'بیمه';
        break;
      case 'regulate':
        value = 'رگوله';
        break;
      case 'minimumDesposit':
        value = 'حداقل واریزی';
        break;
      case 'leverage':
        value = 'لوریج(اهرم)';
        break;
      case 'deposit':
        value = 'واریز و برداشت';
        break;
      case 'platform':
        value = 'پلتفرم';
        break;
      case 'operate':
        value = 'بررسی و ثبت نام';
        break;
    }
    return value;
  }
}
