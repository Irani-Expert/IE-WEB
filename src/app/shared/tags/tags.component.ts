import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { TagService } from 'src/app/classes/services/tag.service';
import { IArticle } from '../../classes/interfaces/article.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent {
  constructor(private _tagServices: TagService, private router: Router) {}
  searchTag(searchingTag: string) {
    searchingTag = searchingTag.slice();

    this.router.navigateByUrl(`search?search=${searchingTag}`);
  }

  values: IArticle | undefined;

  async ngOnInit() {
    let getData = await lastValueFrom(
      this._tagServices.get('Article/details?id=1029', undefined)
    );
    this.values = getData.data;
  }
}
