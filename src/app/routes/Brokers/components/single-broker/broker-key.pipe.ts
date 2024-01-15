import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'borkerKey' })
export class BrokerKeyPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    console.log(value);
    return value;
  }
}
