import { Utils } from 'src/app/classes/utils';

export class Filter {
  currentTime: string | null = Utils.changeFormatDate(today)!;
  fromTime: string | null = null;
  toTime: string | null = null;
  importance: number[] = [];
  currencies: string[] = [];
  sectors: number[] = [];
}
const today = new Date();
