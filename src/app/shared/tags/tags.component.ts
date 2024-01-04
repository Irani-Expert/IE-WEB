import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { TagService } from 'src/app/classes/services/tag.service';
import { IArticle } from '../../classes/interfaces/article.interface';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent {
  constructor(private _tagServices: TagService) {}

  values: IArticle | undefined;

  async ngOnInit() {
    let getData = await lastValueFrom(
      this._tagServices.get('Article/details?id=1029', undefined)
    );
    this.values = getData.data;
  }
}
