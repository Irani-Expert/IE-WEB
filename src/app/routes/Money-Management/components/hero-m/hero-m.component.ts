import { Component, Input } from '@angular/core';
import { SingleBlog } from 'src/app/classes/interfaces/blog.interface';
import { FAQ } from 'src/app/routes/Home/components/questions/interfaces/faq-interfce';
import { environment } from 'src/environments/environment.dev';

class SingleBlogModel implements SingleBlog {
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
  colorCode: string;
}

@Component({
  selector: 'app-hero-m',
  templateUrl: './hero-m.component.html',
  styleUrls: ['./hero-m.component.scss']
})
export class HeroMComponent {
  color : string;

  @Input('data') articleModel: SingleBlogModel = new SingleBlogModel();

  contentUrl = environment.contentUrl;

  ngOnInit(){

    if (this.articleModel.colorCode == null || undefined){
      this.color = '#0066FF';
    } 
    else{
      this.color = this.articleModel.colorCode;        
    }
    
    if (this.articleModel.studyTime == null || undefined){
      this.articleModel.studyTime = '00:15:00'
    } 


  }
}
