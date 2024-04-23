import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { File } from '../interfaces/file.interface';
import { lastValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileService extends BaseService<File[]> {
  constructor(http: HttpClient, toastr: ToastrService) {
    super(http, toastr);
  }

  async getFile(rowID: number, tableType: number, stationID?: number) {
    // const obj = { rowID: rowID, tableType: tableType };
    // const params = new HttpParams({ fromObject: obj });
    const req = this.get(`Files/GetByTableTypeAndRowID`).pipe(
      map((it) => {
        return it;
      })
    );

    const res = await lastValueFrom(req);
    console.log(res);
  }
}
