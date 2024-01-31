import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { ITags } from 'src/app/classes/interfaces/tags.interface';
import { BlogService } from 'src/app/classes/services/blog.service';

@Component({
  selector: 'app-landig-money-m',
  templateUrl: './landig-money-m.component.html',
  styleUrls: ['./landig-money-m.component.scss'],
})
export class LandigMoneyMComponent {
  title: string = '';
  language: string = '';
  id: number = 0;
  sendDataToChild = false;
  tags: ITags[];


  constructor(private _meta: Meta , public blogService : BlogService) {
    
    AppComponent.changeMainBg('creamy');
    this._meta.updateTag({
      name: 'description',
      content:
        'مدیریت سرمایه(money management) در بازارهای مالی علمی است که در فعالیت های سرمایه گذاری میتوان ریسک را کنترل کرد و یک استراتژی معاملاتی برای سرمایه اولیه تولید کرد. ',
    });
    this._meta.updateTag({
      name: 'author',
      content: 'مهدی اکبر',
    });
    this._meta.updateTag({
      name: 'keywords',
      content:
        'مدیریت سرمایه گذاری پیشرفته,مدیریت سرمایه گذاری استراتژیک,مدیریت ریسک و سرمایه در ترید, فرمول مدیریت سرمایه در ترید, مدیریت سرمایه در ترید, مدیریت سرمایه فارکس, مدیریت ریسک و سرمایه گذاری ,مدیریت سرمایه به زبان ساده',
    });

  }
  ngOnDestroy() {
    AppComponent.changeMainBg('white');
  }
  async ngAfterViewInit() {
    if (await this.getDetail('money-management', 'fa')) {
      this.tags = this.blogService._blog!.sharpLinkTags;

      this.id = Number(this.blogService._blog?.id);

      this.sendDataToChild = true;
    }
  }

    async getDetail(title: string, language: string) {
    const apiRes = await this.blogService.getBlog(title, language);
    return apiRes;
  }
}
