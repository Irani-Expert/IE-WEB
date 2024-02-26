import { Utils } from 'src/app/classes/utils';

export class Filter {
  currentTime: string = Utils.changeFormatDate(today)!;
  fromTime: string;
  toTime: string;
  importance: number[] = [];
  currencies: string[] = [];
  sectors: number[] = [];
}
const today = new Date();
