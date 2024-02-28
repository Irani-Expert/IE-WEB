import { Component, Input } from '@angular/core';
import { SingleBlog } from 'src/app/classes/interfaces/blog.interface';
import { FAQ } from 'src/app/routes/Home/components/questions/interfaces/faq-interfce';

class SingleBlogModel implements SingleBlog {
  colorCode: string;
  createDate: string = '';
  id: number = 0;
  title: string = '';
  description: string = '';
  groupID: number = 0;
  group: string = '';
  groupIcon: string = '';
  groupIconExists: boolean = false;
  brief: string = '';
  publishDate: string = '';
  cardImagePath: string = '';
  viewsCount: number = 0;
  rate: number = 0;
  commentCount: number = 0;
  updatedByFirstName: string = '';
  updatedByLastName: string = '';
  authorIconPath: string = '';
  studyTime: string = '';
  authorIconExists: boolean = false;
  fileExists: boolean = false;
  isRTL: boolean = false;
  metaDescription: string = '';
  browserTitle: string = '';
  favoriteCount: number = 0;
  linkTags: [{ title: string; value: number }] = [{ title: '', value: 0 }];
  sharpLinkTags: [{ title: string; value: number }] = [{ title: '', value: 0 }];
  faQs: FAQ[] = new Array<FAQ>();
}

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
})
export class VoteComponent {
  
  @Input('data') articleModel: SingleBlogModel = new SingleBlogModel();

  text: string = 'عالی';
  rate: number = 3;
  putStyle(n: number, text: string) {
    this.rate = n;
    this.text = text;
  }
}
