import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Page, PageInterface } from '../page.model';
import { Comment } from '../interfaces/comment.interface';
import { BehaviorSubject, map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CommentService extends BaseService<PageInterface<Comment[]>> {
  _pageinatedComment: BehaviorSubject<PageInterface<Comment[]> | null> =
    new BehaviorSubject<PageInterface<Comment[]> | null>(null);
  constructor(http: HttpClient, toastr: ToastrService) {
    super(http, toastr);
  }
  get _pageModel() {
    return this._pageinatedComment.value;
  }
  get _items() {
    return this._pageinatedComment.value?.items?.filter(
      (item) => item.isAccepted == true
    );
  }

  async getComments(tableType: number, rowID: number, page: Page<[]>) {
    const apiResult = this.get(
      `Comment/GetByTableTypeAndRowId/${rowID}/${tableType}${page.params}`
    ).pipe(
      map((res) => {
        if (res.success) {
          this._pageinatedComment.next(res.data!);
        }
        return res.success;
      })
    );
    return apiResult;
  }
}
