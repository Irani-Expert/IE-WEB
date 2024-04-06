import { Component, Input } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { TagService } from 'src/app/classes/services/tag.service';
import { IArticle } from '../../classes/interfaces/article.interface';
import { Router } from '@angular/router';
import { ITags } from 'src/app/classes/interfaces/tags.interface';
import { BlogService } from 'src/app/classes/services/blog.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent {
  @Input ('data') data : ITags[];
  
  tags: ITags[];

  constructor(
    public blogService: BlogService,
    // private _tagServices: TagService,
    private router: Router
    ) {}

  searchTag(searchingTag: string) {
    searchingTag = searchingTag.slice();

    this.router.navigateByUrl(`search?search=${searchingTag}`);
  }

  values: IArticle | undefined;

  async ngOnInit() {
  
    // let getData = await lastValueFrom(
    //   this._tagServices.get('Article/details?id=1029', undefined)
    // );
    // this.values = getData.data;
  }

}
