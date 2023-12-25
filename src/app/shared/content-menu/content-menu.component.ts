import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content-menu',
  templateUrl: './content-menu.component.html',
  styleUrls: ['./content-menu.component.scss']
})
export class ContentMenuComponent {
  menuOpen: boolean = false;
  @ViewChild('listElem') listElem: ElementRef;
  @ViewChild('listElemHide') listElemHide: ElementRef;
  iconActive : boolean = false;

  listElems: Array<any> =
   [
    {
      tittle : 'مدیریت سرمایه چیست و چرا در بازارهای مالی مهم است؟',
      name1 : 'چرا مدیریت سرمایه  برای معامله‌گران مهم است؟',
      name2: 'مدیریت سرمایه مناسب چه افرادی است؟',
      name3:'',
      active : false,
      id : 1
    },
    {
      tittle : 'اهمیت و اهداف مدیریت سرمایه برای ترید در بازار فارکس',
      name1 : 'چرا باید از مدیریت سرمایه در ترید بازار فارکس استفاده کرد',
      name2: '',
      name3:'',
      active : false,
      id : 2
    },
    {
      tittle : 'اشتباهات رایج معامله‌گران هنگام مدیریت سرمایه چیست وچگونه می‌توان پیشگیری کرد؟',
      name1 : '',
      name2: '',
      name3:'',
      active : false,
      id : 3
    },
    {
      tittle : 'تقسیم سرمایه در بازار فارکس به چه صورت است؟',
      name1 : '',
      name2: '',
      name3:'',
      active : false,
      id : 4
    },
    {
      tittle : 'مهم ترین فاکتور مدیریت سرمایه در بازار فارکس چیست؟',
      name1 : '',
      name2: '',
      name3:'',
      active : false,
      id : 5
    },
    {
      tittle : 'حداقل سرمایه در بازار فارکس به چه صورت است؟',
      name1 : 'استراتژی معاملاتی',
      name2: 'تجربه ',
      name3:'بروکر',
      active : false,
      id : 6
    },
    {
      tittle : 'بهترین روش مدیریت سرمایه در ترید',
      name1 : '',
      name2: '',
      name3:'',
      active : false,
      id : 7
    },
    {
      tittle : 'انواع استراتژی مدیریت سرمایه چیست؟',
      name1 : '',
      name2: '',
      name3:'',
      active : false,
      id : 8
    },
    {
      tittle : 'عوامل مهم در سیستم مدیریت سرمایه چیست؟',
      name1 : '',
      name2: '',
      name3:'',
      active : false,
      id : 9
    },
    {
      tittle : 'عدم استفاده از مدیریت ریسک چه عواقبی دارد؟',
      name1 : '',
      name2: '',
      name3:'',
      active : false,
      id : 10
    },
    {
      tittle : 'عملکرد موثر تریدرها برای بهبود مدیریت سرمایه و بازدهی بیشتر استفاده میکنند؟',
      name1 : '',
      name2: '',
      name3:'',
      active : false,
      id : 11
    },
    {
      tittle : 'تحلیل مالی(سود و زیان) برای مدیریت سرمایه به چه صورت است؟',
      name1 : '',
      name2: '',
      name3:'',
      active : false,
      id : 12
    },
    {
      tittle : 'اجرای استراتژی مدیریت سرمایه برای محدود کردن ضررهای احتمالی',
      name1 : '',
      name2: '',
      name3:'',
      active : false,
      id : 13
    },
   ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.listElem.nativeElement.classList.toggle('show-menu');
    this.iconActive = !this.iconActive;
    // this.listElemHide.nativeElement.classList.toggle('hide-menu');

  }

  clickHandler(item: string) {
    this.toggleMenu();
  }

  @HostListener('click') hostClick() {
  }
}
