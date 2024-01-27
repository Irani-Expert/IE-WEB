import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { InputForm, InputInterface } from 'src/app/classes/input';
import { Comment } from 'src/app/classes/interfaces/comment.interface';
import { CommentService } from 'src/app/classes/services/comment.service';
import { AuthService } from '../auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Result } from 'src/app/classes/result';
import { PageInterface } from 'src/app/classes/page.model';

let formDataInit: Comment = {
  id: 0,
  isActive: true,
  userID: 0,
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
  preComments: Comment[] | undefined = new Array<Comment>();
  @Input() rowId: number | undefined;
  formErrors: { [key: string]: string[] } = {};
  commentData: Comment[] = new Array<Comment>();
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
  rateText: string = 'خوب';
  rate: number = 3;
  completedFill: boolean = false;
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
  ngOnInit() {
    this.getComment();
    formDataInit.id != this.rowId;
  }
  ngAfterContentChecked() {
    if (this._authservice._user.id != 0) {
      this.completedFill = true;
      this.form.controls['NameInfo'].setValue(
        this._authservice._user.firstName + this._authservice._user.lastName
      );
      this.form.controls['NameInfo'].disable;
      this.form.controls['Email'].setValue(this._authservice._user.username);
      this.form.controls['Email'].disable;
    }
  }
  async getComment() {
    // await lastValueFrom(
    //   this._comment.get(
    //     'Comment/GetByTableTypeAndRowId/1061/1?pageIndex=0&pageSize=100&accending=true      ',
    //     undefined
    //   )
    // );
    // this.questionFaq = (await lastValueFrom(res)).data!;
    this._comment
      .get(
        'Comment/GetByTableTypeAndRowId/' +
          this.rowId +
          '/' +
          this.tableType +
          '?pageIndex=0&pageSize=100&accending=true ',
        undefined
      )
      .subscribe((res: Result<PageInterface<Comment[]>>) => {
        this.preComments = res.data?.items?.filter((it) => it.isAccepted);
      });
  }
  async commentServices() {
    this.formErrors = {};
    let formData = formDataInit;
    formData.name = this._NameInfo;
    formData.text = this._text;
    formData.email = this._Email;
    formData.rate = this.rate;
    formData.tableType = this.tableType;
    formData.rowID != this.rowId;
    formData.userID = this._authservice._user.id;
    if (await this.checkFormValidation(formData)) {
      const apiRes = this._comment.post(
        'Comment?authorID=' + this._authservice._user.id,
        formData
      );
      if (await lastValueFrom(apiRes)) {
        this.toaster.success('با موفقیت ثبت شد');
      }
    } else {
      this.toaster.error('خطا در عملیات!!!');
      console.log('Not Valid');
    }
  }
  // ===================[رسپانسیو ]==================
  constructor(
    private _comment: CommentService,
    private _authservice: AuthService,
    private toaster: ToastrService
  ) {
    this.form = new FormGroup({});
    this.formMaker.inputs.forEach((item) => {
      this.form.setControl(item.name, this.formMaker.createControl(item));
      console.log(this._authservice._user.id);
    });
    this.formControls = this.formMaker.inputs;
  }
  device: 'sm' | 'lg' = 'lg';
  async checkFormValidation(_formData: Comment) {
    for (const controlName in this.form.controls) {
      const control = this.form.controls[controlName];

      if (control.invalid) {
        this.formErrors[controlName] = [];

        if (control.errors!['required']) {
          this.formErrors[controlName].push(`${controlName} is required.`);
        }

        if (control.errors!['email']) {
          this.formErrors[controlName].push(`Invalid ${controlName} format.`);
        }

        if (control.errors!['pattern']) {
          this.formErrors[controlName].push(
            `${controlName} must be a valid number.`
          );
        }

        if (control.errors!['min']) {
          this.formErrors[controlName].push(
            `You must be at least 18 years old.`
          );
        }
      }
    }
    // console.log(formErrors);
    let erorrKeyName = Object.keys(this.formErrors);
    this.formControlInit.forEach((x) => {
      if (erorrKeyName.indexOf(x.name) > -1) {
        x.hasErr = true;
      }
      setInterval(() => {
        x.hasErr = false;
      }, 10000);
    });

    if (Object.keys(this.formErrors).length > 0) {
      return false;
    } else {
      return true;
    }
    // You Can Add Any Validation Here
    // But now We don't need any
  }
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
