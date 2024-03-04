import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { ITags } from 'src/app/classes/interfaces/tags.interface';
import { BlogService } from 'src/app/classes/services/blog.service';
import { LinkService } from 'src/app/classes/services/link.service';

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

  constructor(
    private _meta: Meta,
    public blogService: BlogService,
    private _linkService: LinkService
  ) {
    this._linkService.createLink(
      `https://www.iraniexpert.com/money-management`
    );

    AppComponent.changeMainBg('creamy');
  }
  ngOnDestroy() {
    AppComponent.changeMainBg('white');
  }
  async ngAfterViewInit() {
    if (await this.getDetail('money-management', 'fa')) {
      this.tags = this.blogService._blog!.sharpLinkTags;

      this.id = Number(this.blogService._blog?.id);
      let keywords = '';
      this.blogService._blog!.linkTags.forEach((item) => {
        keywords += `${item.title.replace(/#/g, '')},`;
      });
      this._meta.updateTag({
        name: 'description',
        content: this.blogService._blog!.metaDescription,
      });
      this._meta.updateTag({
        name: 'author',
        content:
          this.blogService._blog!.updatedByFirstName +
          this.blogService._blog!.updatedByLastName,
      });
      this._meta.updateTag({
        name: 'keywords',
        content:
          'مدیریت سرمایه گذاری پیشرفته,مدیریت سرمایه گذاری استراتژیک,مدیریت ریسک و سرمایه در ترید, فرمول مدیریت سرمایه در ترید, مدیریت سرمایه در ترید, مدیریت سرمایه فارکس, مدیریت ریسک و سرمایه گذاری ,مدیریت سرمایه به زبان ساده',
        // content: keywords
      });
      this.sendDataToChild = true;
    }
  }

  async getDetail(title: string, language: string) {
    const apiRes = await this.blogService.getBlog(title, language);
    return apiRes;
  }
}
