import { Directive, PipeTransform } from '@angular/core';

@Directive({ selector: '[brokerValue]' })
export class BrokerValuePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    console.log(value);
    return value;
  }
}
