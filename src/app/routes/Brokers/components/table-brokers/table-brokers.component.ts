import {
  Component,
  // , Input
} from '@angular/core';
interface BrokerTable {
  rate: number;
  name: string;
  logoSrc: string;
  establishedYear: number;
  regulate: string[];
  minimumDesposit: number;
  leverage: number;
  deposit: string[];
  platform: string[];
  insurance: string;
  linkSite?: string;
}

class BrokerTableModel implements BrokerTable {
  rate: number = 0;
  logoSrc: string = '';
  name: string = '';
  establishedYear: number = 0;
  insurance: string = '';
  regulate: string[] = [];
  minimumDesposit: number = 0;
  leverage: number = 0;
  deposit: string[] = [];
  platform: string[] = [];
}
interface BrokerTableTh {
  title: string;
  id: number;
  engTitle: string;
}
@Component({
  selector: 'app-table-brokers',
  templateUrl: './table-brokers.component.html',
  styleUrls: ['./table-brokers.component.scss'],
})
export class TableBrokersComponent {
  tableModel = new BrokerTableModel();
  items: Array<BrokerTable> = [
{  deposit: ['وبمانی','ریالی مستقیم','پرفکت‌مانی','کریپتوکارنسی'],
establishedYear: 2014,
leverage: 1000,
logoSrc: '',
minimumDesposit: 10,
name: 'فارکس چیف',
platform: ['MT4', 'MT5', 'Web Trader'],
rate: 7.2,
regulate: ['VFSC'],
insurance: '--'},
{
  deposit: ['وبمانی','ریالی مستقیم','پرفکت‌ مانی','ریالی تاپ چنج','رمزارز'],
establishedYear: 2006,
leverage: 400,
logoSrc: '',
minimumDesposit: 1,
name: 'آی اف سی مارکتس',
platform: ['MT4', 'MT5', 'Web Terminal', 'NetTraderX'],
rate: 7.2,
regulate: ['BVI FSC', 'LFSA', 'CySec'],
insurance: '--'},
{
  deposit: ['کریپتو','ریالی تاپ چنج','پرفکت مانی','وب مانی','نتلر','اسکریل','فساپی'],
  establishedYear: 1996,
  leverage: 3000,
  logoSrc: '',
  minimumDesposit: 1,
  name: 'آلپاری',
  platform: ['MT4', 'MT5', 'Web Trader'],
  rate: 8,
  regulate: ['Mwali Island','FINACOM'],
  insurance: '--'
},
{
 name: 'آمارکتس',
 regulate: ['FSC Cook Island','FINACOM'],
 establishedYear: 2007,
 minimumDesposit:100,
 leverage:3000,
 platform:['MT4','MT5','Web Trader'],
 deposit:['کریپتو','ریالی مستقیم','ریالی تاپ چنج','پرفکت مانی','اسکریل'],
 rate: 8.2,
 logoSrc: '',
 insurance:'--'
},
{
 name: 'ویندزور',
 regulate: ['IFSC','CySEC','JSC','FSASeychelles'],
 establishedYear:1988 ,
 minimumDesposit:50,
 leverage:1000,
 platform:['MT4','Web Trader'],
 deposit:['کریپتو','ریالی مستقیم','اسکریل','نتلر','وبمانی'],
 rate: 7.4,
 logoSrc: '',
 insurance:'--'
},
{
 name: 'ارانته',
 regulate: ['FSASeychelles','CySec'],
 establishedYear: 2018,
 minimumDesposit:50,
 leverage:500,
 platform:['MT4','MT5','WebTrader','CTrader'],
 deposit:['بیتکوین و کریپتو','پرفکت مانی','ریالی مستقیم'],
 rate: 7.6,
 logoSrc: '',
 insurance:'--'
},
{
 name: 'یو‌اس‌جی‌اف‌ایکس',
 regulate: ['FCA','FSASVG'],
 establishedYear: 2007,
 minimumDesposit:50,
 leverage:500,
 platform:['MT4','MT5','WebTrader'],
 deposit:['ریالی مستقیم','پرفکت مانی','تتر','اسکریل','نتلر','فساپی'],
 rate: 7.5,
 logoSrc: '',
 insurance:'--'
},{
 name: 'اچ ام سی ام',
 regulate: ['FSASVG','CySEC','FCA','CIMA','DFSA'],
 establishedYear: 1977,
 minimumDesposit: 100,
 leverage: 500,
 platform:['MT4','MT5','WebTrader','HYTrader'],
 deposit:['پرفکت مانی','ریالی مستقیم','بیتکوین و کریپتو','اسکریل','نتلر'],
 rate: 7.8,
 logoSrc: '',
 insurance:'--'
},{
 name: 'لایت فارکس',
 regulate: ['CYSEC','Marshall Islands','FSA'],
 establishedYear: 2005,
 minimumDesposit:10,
 leverage:1000,
 platform:['MT4','MT5','WebTrader'],
 deposit:['کریپتو','ریالی تاپ چنج','پرفکت مانی','وب مانی'],
 rate: 7.3,
 logoSrc: '',
 insurance:'--'
},
{
 name: 'اپوفایننس(اپوفارکس)',
 regulate: ['FSASVG','FSAseychelles','FINACOM'],
 establishedYear: 2021,
 minimumDesposit:100,
 leverage:500,
 platform:['MT4','MT5','Web Trader'],
 deposit:['تاپ چنج','پرفکت مانی','کریپتو'],
 rate: 7,
 logoSrc: '',
 insurance:'--'
},
{
 name: 'آیرون اف ایکس',
 regulate: ['Bermuda','CySEC','ASIC','FCA'],
 establishedYear: 2010,
 minimumDesposit:50,
 leverage:1000,
 platform:['MT4','Web Trader','Iron Trader App'],
 deposit:['ریالی تاپ چنج','ریالی مستقیم','پرفکت مانی','کریپتو'],
 rate:5 ,
 logoSrc: '',
 insurance:'--'
},
{
 name: 'آیرون گروپ',
 regulate: ['FSASVG'],
 establishedYear: 2020,
 minimumDesposit:1,
 leverage:1000,
 platform:['MT5'],
 deposit:['ریالی مستقیم','پرفکت مانی','کریپتو'],
 rate: 5,
 logoSrc: '',
 insurance:'--'
},{
 name: 'پکس فارکس',
 regulate: ['ندارد'],
 establishedYear: 2011,
 minimumDesposit:10,
 leverage:500,
 platform:['MT4','WebTrader'],
 deposit:['وبمانی','پرفکت مانی','کریپتو'],
 rate: 5,
 logoSrc: '',
 insurance:'--'
},
{
 name: 'اینستافارکس',
 regulate: ['CySEC','FSCBVI','FSASVG'],
 establishedYear: 2007,
 minimumDesposit:1,
 leverage:1000,
 platform:['MT4','MT5','WebTrader','MultiTerminal'],
 deposit:['ریالی مستقیم','کریپتو'],
 rate: 5,
 logoSrc: '',
 insurance:'--'
},
{
 name: 'نامبروان',
 regulate: ['VFSC'],
 establishedYear:2017 ,
 minimumDesposit:1,
 leverage:1000,
 platform:['MT4','MT5'],
 deposit:['پرفکت مانی','رمزارزها'],
 rate: 5,
 logoSrc: '',
 insurance:'--'
},{
 name: 'آیکیوایندکس',
 regulate: ['FSCM','CYSEC'],
 establishedYear:2014 ,
 minimumDesposit:100,
 leverage:400,
 platform:['MT4','MT5','WEbTrader'],
 deposit:['پرفکت مانی','کریپتو'],
 rate: 5,
 logoSrc: '',
 insurance:'--'
},{
 name: 'سوپرفارکس',
 regulate: ['IFSC'],
 establishedYear:2013 ,
 minimumDesposit:1,
 leverage:3000,
 platform:['MT4'],
 deposit:['ریالی مستقیم','پرفکت مانی','کریپتو'],
 rate: 5,
 logoSrc: '',
 insurance:'--'
},
{
 name: 'جاست فارکس',
 regulate: ['FSASVG','CySEC'],
 establishedYear: 2012,
 minimumDesposit:1,
 leverage:3000,
 platform:['MT4','MT5','WebTrader'],
 deposit:['ریالی مستقیم','پرفکت مانی','کریپتو'],
 rate: 5.5,
 logoSrc: '',
 insurance:'--'
},{
 name: 'آی‌تی‌بی‌اف‌ایکس',
 regulate: ['FSASVG','MWALI'],
 establishedYear: 2017,
 minimumDesposit:1,
 leverage:500,
 platform:['MT5'],
 deposit:['ریالی','کریپتو'],
 rate: 4.3,
 logoSrc: '',
 insurance:'--'
},{
 name: 'اینوسلو',
 regulate: ['ARDFM'],
 establishedYear:2021 ,
 minimumDesposit:100,
 leverage:2000,
 platform:['MT4','WebTrader'],
 deposit:['ریالی مستقیم','پرفکت مانی','رمزارزها'],
 rate: 4,
 logoSrc: '',
 insurance:'--'
},{
 name: 'نیکس',
 regulate: ['ندارد'],
 establishedYear: 2019,
 minimumDesposit:5,
 leverage:2000,
 platform:['MT5'],
 deposit:['ریالی تاپ چنج','وبمانی','رمزارزها'],
 rate: 4,
 logoSrc: '',
 insurance:'--'
},{
 name: 'آی سی ام بروکرز',
 regulate: ['VFSC','FSASVG'],
 establishedYear: 2007,
 minimumDesposit:250,
 leverage:400,
 platform:['MT4','MultiTerminal'],
 deposit:['ریالی تاپ چنج','کریپتو'],
 rate: 4.5,
 logoSrc: '',
 insurance:'--'
},{
 name: 'گرند کپیتال',
 regulate: ['FINACOM'],
 establishedYear: 2006,
 minimumDesposit:10,
 leverage:1000,
 platform:['MT4','MT5','WebTrader'],
 deposit:['ریالی تاپ چنج','پرفکت مانی','کریپتو'],
 rate: 5.9,
 logoSrc: '',
 insurance:'--'
},{
 name: 'فیبوگروپ',
 regulate: ['FSC','CySEC'],
 establishedYear: 1988,
 minimumDesposit:1,
 leverage:1000,
 platform:['MT4','MT5','cTrader','WebTrader'],
 deposit:['ریالی مستقیم','وبمانی','اسکریل','نتلر','کریپتو'],
 rate: 7.4,
 logoSrc: '',
 insurance:'--'
},
{
 name: 'کپیتال اکستند',
 regulate: ['ARDFM RK','FINACOM'],
 establishedYear: 0,
 minimumDesposit:100,
 leverage:1000,
 platform:['MT4','MT5','WebTrader'],
 deposit:['ریالی مستقیم','پرفکت مانی','کریپتو کارنسی'],
 rate: 7.2,
 logoSrc: '',
 insurance:'--'
},
{
 name: 'تاپ اف ایکس',
 regulate: ['CySEC','FSASeychelles','FSABermuda'],
 establishedYear: 2010,
 minimumDesposit:50,
 leverage:1000,
 platform:['MT4','cTrader'],
 deposit:['پرفکت مانی','کریپتو'],
 rate: 7,
 logoSrc: '',
 insurance:'--'
},
{
 name: 'اینگات بروکرز',
 regulate: ['FSASVG','ASIC','JSC','FSASeychelles'],
 establishedYear: 2006,
 minimumDesposit:100,
 leverage:500,
 platform:['MT4','MT5','WebTrader'],
 deposit:['ریالی مستقیم','ریالی تاپ چنج','کریپتو'],
 rate: 6.9,
 logoSrc: '',
 insurance:'--'
},
{
 name: 'دلتااف ایکس',
 regulate: ['Financial Commission','SVGFSA'],
 establishedYear: 2009,
 minimumDesposit:10,
 leverage:1000,
 platform:['MT4'],
 deposit:['ریالی مستقیم','وبمانی','کریپتو'],
 rate: 6.1,
 logoSrc: '',
 insurance:'--'
},
{
 name: 'لیدیافارکس',
 regulate: ['ندارد'],
 establishedYear: 2011,
 minimumDesposit:300,
 leverage:200,
 platform:['MT5'],
 deposit:['ریالی مستقیم','وبمانی','پرفکت مانی','کریپتو'],
 rate: 3.9,
 logoSrc: '',
 insurance:'--'
},{
 name: 'اچ وای سی ام',
 regulate: ['FSASVG','CySEC','FCA','CIMA','DFSA'],
 establishedYear: 1977,
 minimumDesposit:100,
 leverage:500,
 platform:['MT4','MT5','WebTrader','HYTrader'],
 deposit:['ریالی مستقیم','پرفکت مانی','کریپتو','اسکریل','نتلر'],
 rate: 7.8,
 logoSrc: '',
 insurance:'--'
},
{
 name: 'اوربکس',
 regulate: ['FSC Mauritius','CySEC','FSA'],
 establishedYear: 2011,
 minimumDesposit:100,
 leverage:500,
 platform:['MT4'],
 deposit:['پرفکت مانی','کریپتو','وبمانی'],
 rate: 7,
 logoSrc: '',
 insurance:'--'
},
{
 name: 'اف ایکس چویس',
 regulate: ['FSC'],
 establishedYear:2010 ,
 minimumDesposit:10,
 leverage:1000,
 platform:['MT4','MT5','WebTrader'],
 deposit:['ریالی تاپ چنج','پرفکت مانی','کریپتو'],
 rate: 7,
 logoSrc: '',
 insurance:'--'
},
{
 name: 'تریدرزوِی',
 regulate: ['ثبت شده در دومینیکا ندارد'],
 establishedYear: 2011,
 minimumDesposit:10,
 leverage:1000,
 platform:['MT4','MT5','cTrader','WebTrader'],
 deposit:['ریالی','پرفکت مانی','کریپتو'],
 rate: 6.3,
 logoSrc: '',
 insurance:'--'
}






























  ];
  tableHeaders = new Array<BrokerTableTh>();
  constructor() {
    let keys = Object.keys(this.tableModel);
    keys.forEach((it, counter) => {
      this.tableHeaders.push({ engTitle: it, id: counter + 1, title: it });
    });
    this.tableHeaders.push({
      engTitle: 'operate',
      id: this.tableHeaders.length + 1,
      title: 'بررسی و ثبت نام',
    });
  }
}
