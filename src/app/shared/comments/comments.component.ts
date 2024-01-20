import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { InputForm, InputInterface } from 'src/app/classes/input';
import { Comment } from 'src/app/classes/interfaces/comment.interface';
import { CommentService } from 'src/app/classes/services/comment.service';
import { AuthService } from '../auth/auth.service';
import { ToastrService } from 'ngx-toastr';
const formDataInit: Comment = {
  id: 0,
  isActive: true,
  userID: 54,
  name: 'mohammad t',
  text: 'this is test',
  rate: 3,
  tableType: 1,
  email: 'm@gmail.com',
  isAccepted: false,
  rowID: 1061,
};
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  @Input() rowId: number;
  @Input() tableType: number;
  formControlInit: InputInterface[] = [
    {
      id: 1,
      label: 'نام و نام خانوادگی',
      name: 'NameInfo',
      class: 'input-without-icon',
      typeofVlaue: 'string',
      placeholder: 'نام',
      required: true,
      hasErr: false,
    },
    {
      id: 2,
      label: 'متن',
      name: 'textAr',
      class: 'input-without-icon',
      typeofVlaue: 'string',
      placeholder: 'نام',
      required: true,
      hasErr: false,
    },
    {
      id: 3,
      label: 'email',
      name: 'Email',
      type: 'email',
      class: 'input-without-icon',
      typeofVlaue: 'string',
      placeholder: 'ایمیل',
      required: true,
      hasErr: false,
    },
  ];
  formMaker = new InputForm(this.formControlInit);

  formControls!: InputInterface[];
  form: FormGroup;

  @Input('data') comments: Comment[] = new Array<Comment>();
  rateText: string = 'عالی';
  rate: number = 3;
  putStyle(n: number, text: string) {
    this.rate = n;
    this.rateText = text;
  }
  get _NameInfo(): string {
    return this.form.controls['NameInfo'].value;
  }
  get _text(): string {
    return this.form.controls['textAr'].value;
  }

  get _Email(): string {
    return this.form.controls['Email'].value;
  }
  ngOnInit() {}
  async commentServices() {
    if (this._authservice._user.id != 0) {
      let formData = formDataInit;
      formData.name = this._NameInfo;
      formData.text = this._text;
      formData.email = this._Email;
      formData.rate = this.rate;
      formData.tableType = this.tableType;
      formData.rowID = this.rowId;
      formData.userID = this._authservice._user.id;
      const apiRes = this._comment.post(
        'Comment?authorID=' + this._authservice._user.id,
        formData
      );
      await lastValueFrom(apiRes);
    } else {
      this._toaster.error('لطفا وارد شوید', 'عملیات با خطا مواجه شد');
    }
  }
  // ===================[رسپانسیو ]==================
  constructor(
    private _comment: CommentService,
    private _authservice: AuthService,
    private _toaster: ToastrService
  ) {
    this.form = new FormGroup({});
    this.formMaker.inputs.forEach((item) => {
      this.form.setControl(item.name, this.formMaker.createControl(item));
    });
    this.formControls = this.formMaker.inputs;
  }
  device: 'sm' | 'lg' = 'lg';

  // @HostListener('window:resize', ['$event'])
  // onResize() {
  //   this.updateDeviceValue();
  // }
  // updateDeviceValue() {
  //   if (AppComponent.isBrowser.value) {
  //     if (Utils.isTablet()) {
  //       this.device = 'sm';
  //     } else {
  //       this.device = 'lg';
  //     }
  //   }
  // }
}
