import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { RatingConfig, StarRating } from 'src/app/shared/rating/rating-config';
import { planInterface } from './interfaces/product-interface';
import { SingleProduct } from 'src/app/classes/interfaces/product.interface';
import { smoothWidth } from 'src/app/classes/animation';
import { Utils } from 'src/app/classes/utils';
import { AppComponent } from 'src/app/app.component';
import { environment } from 'src/environments/environment.dev';
import { OrderService } from 'src/app/classes/services/order.service';
import { Basket, BskItem } from 'src/app/classes/interfaces/basket.interface';
import { Router } from '@angular/router';
import { CarouselImage } from 'src/app/shared/carousel/carousel';
import { LocalStorageService } from 'src/app/classes/local-storage';
import { RouteService } from 'src/app/classes/services/route.service';
import { HeaderLayoutComponent } from 'src/app/components/header-layout/header-layout.component';
import { ModalService } from 'src/app/shared/modal/services/modal.service';
import { InputForm, InputInterface } from 'src/app/classes/input';
import { FormGroup } from '@angular/forms';
import { IDemoRequest } from './interfaces/idemo-request';
// import { OrderService } from 'src/app/classes/services/order.service';
import { AuthService } from 'src/app/shared/auth/auth.service';

const planInit: planInterface = {
  active: false,
  id: -1,
  offPrice: 0,
  price: 0,
  title: '',
  description: '',
  discountPrice: 0,
  toPayPrice: 0,
};

@Component({
  selector: 'app-shop-hero',
  templateUrl: './shop-hero.component.html',
  styleUrls: ['./shop-hero.component.scss'],
  animations: [smoothWidth],
})
export class ShopHeroComponent implements OnInit {
  galleryImages: CarouselImage[] = new Array<CarouselImage>();
  contentUrl = environment.contentUrl;
  formControls: InputInterface[];
  formDataInit: IDemoRequest = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  };
  status: number = 0;
  formControlInit: InputInterface[] = [
    {
      id: 1,
      label: 'نام',
      name: 'firstName',
      type: 'text',
      hasErr: false,
      class: 'input-with-icon',
      typeofVlaue: 'string',

      placeholder: 'نام',
      required: true,
    },
    {
      id: 1,
      label: 'نام خانوادگی',
      name: 'lastName',
      type: 'text',
      class: 'input-with-icon',
      typeofVlaue: 'string',
      hasErr: false,
      placeholder: 'نام خانوادگی',
      required: true,
    },
    {
      id: 1,
      label: 'ایمیل',
      name: 'email',
      type: 'email',
      class: 'input-with-icon',
      hasErr: false,
      typeofVlaue: 'string',
      icon: [
        {
          id: 1,
          placement: 'right-icon',
          src: 'assets/icon/email.svg',
          alt: 'email-icon',
        },
      ],
      placeholder: 'ایمیل',
      required: true,
    },
    {
      id: 1,
      label: 'شماره تماس',
      name: 'phoneNumber',
      type: 'text',
      class: 'input-with-icon',
      typeofVlaue: 'string',
      hasErr: false,
      placeholder: 'شماره تماس',
      required: true,
    },
  ];
  formMaker = new InputForm(this.formControlInit);
  form: FormGroup;

  // test(){
  //   var a = [1, 2, 5, 4, 3];
  //   console.log(a);
  //   a.splice(4,0,a.splice(2,1)[0]);

  //   var b = [1, 2, 5, 4, 3];
  //   b.splice(0,0,b.splice(4,1)[0]);
  //   console.log(b);

  // }

  constructor(
    private _orderService: OrderService,
    private router: Router,
    private _localStorage: LocalStorageService,
    private _routeService: RouteService,
    private _modal: ModalService
  ) {
    // this.test();
    this.form = new FormGroup({});
    this.formMaker.inputs.forEach((item) => {
      this.form.setControl(item.name, this.formMaker.createControl(item));
    });
    this.formControls = this.formMaker.inputs;
    this._orderService.basket.value.basketItems = [];
  } // private localStorage: LocalStorageService //
  @ViewChild('scroll') scroll: ElementRef;
  animationState = false;
  @Input('data') product: SingleProduct;
  // ============[ستاره ها]==================
  star: RatingConfig<StarRating> = {
    type: 1,
    content: { readonly: true, currentRate: 4, rate: 5 },
  };
  // ============[سرویس ]==================
  selectedPlan: planInterface = planInit;
  plans: planInterface[] = new Array<planInterface>();
  modalStatus: boolean = false;
  get _firstName(): string {
    return this.form.controls['firstName'].value;
  }
  get _lastName(): string {
    return this.form.controls['lastName'].value;
  }
  get _email(): string {
    return this.form.controls['email'].value;
  }
  get _phoneNumber(): string {
    return this.form.controls['phoneNumber'].value;
  }
  async ngOnInit() {
    var titleData = {
      routename: this.product.title,
    };
    this._routeService.changePersianRouteName(titleData);

    let userBasket = JSON.parse(this._localStorage.getItem('user_basket')!);
    if (userBasket) {
      if (this.checkProductSimilarity(userBasket)) {
        this._orderService.basket.next(userBasket);
      } else {
        this._localStorage.removeItem('user_basket');
        this.addToBsk();
      }
    } else {
      this.addToBsk();
    }

    this.updateDeviceValue();
    // this.product.plans.splice(0,0,this.product.plans.splice(7,1)[0]);
    this.product.plans.sort((a, b) => a.orderID - b.orderID);
    this.product.plans
      .filter((it) => it.isActive == true)
      .forEach((it) => {
        this.plans.push({
          offPrice: 0,
          id: it.id,
          active: false,
          price: it.price,
          title: it.title,
          description: it.description,
          discountPrice: it.discountPrice,
          toPayPrice: it.toPayPrice,
        });
      });

    this.selectedPlan = this.plans[0];
    this.selectedPlan.active = true;
    let gallery = this.product.galleries.filter((it) => it.stationID !== 3);
    gallery.forEach((it, index) => {
      this.galleryImages.push({
        id: index + 1,
        src: this.contentUrl + it.filePath,
      });
    });
    this.discountPrice();
  }
  // get _modalStatus() {
  //   return ShopHeroComponent.modalStatus;
  // }
  // ======={تخفیف}=====
  hideDiscount : boolean;

  discountPrice(){
    // this.product.plans.filter((it) => {
      
    //   if( it.discountPrice == null || it.discountPrice == 0 || it.discountPrice == undefined){
    //     this.hideDiscount = false;
    //   }
    //   else{
    //     this.hideDiscount = true;
    //   }      
    // })
    if (this.selectedPlan.discountPrice == null || this.selectedPlan.discountPrice == 0 || this.selectedPlan.discountPrice == undefined){
      this.hideDiscount = true;
    }
    else{
      this.hideDiscount = false;
    }
    
  }
  // ==========={اکتیو}=========
  toggle(plan: planInterface) {
    
    if (this.selectedPlan.id == plan.id) {
      return;
    }
    this.plans.forEach((item) => (item.active = false));
    plan.active = true;
    this.selectedPlan = plan;
    this.fireAnimation();
    
    if(plan.discountPrice == null || plan.discountPrice == 0 || plan.discountPrice == undefined){
      this.hideDiscount = true;
    }
    else{
      this.hideDiscount = false;
    }
  }
  // =================[انیمیشن]============
  changed = false;
  fireAnimation() {
    this.changed = !this.changed;
    this.animationState = true;
    setTimeout(() => {
      this.animationState = false;
    }, 400);
  }
  // =================[رسپانسیو]============
  device: 'sm' | 'lg' = 'lg';

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateDeviceValue();
  }
  updateDeviceValue() {
    if (AppComponent.isBrowser.value) {
      if (Utils.isMobileL()) {
        this.device = 'sm';
      } else {
        this.device = 'lg';
      }
    }
  }
  get demoFile() {
    let src = this.product.galleries.find((it) => it.stationID == 3)?.filePath;
    return src;
  }
  async toCheckout(item: planInterface) {
    let itemForBsk: BskItem = {
      count: 1,
      price: 0,
      rowID: item.id,
      tableType: 17,
      title: item.title,
      id: this._orderService.basket.value.basketItems.length + 1,
    };

    if(item.discountPrice == null || item.discountPrice == 0 || item.discountPrice == undefined){
      itemForBsk.price = item.price;
    }
    else{
      itemForBsk.price = item.toPayPrice;
    }
    
    // let basket: Basket = {
    //   basketItems: [itemForBsk, product],
    //   totalCount: 1,
    //   totalPrice: itemForBsk.price,
    // };
    this._orderService.pushToBSK(itemForBsk);
    this._localStorage.setItem(
      'user_basket',
      JSON.stringify(this._orderService.basket.value)
    );
    this.router.navigateByUrl('checkout');
  }

  checkProductSimilarity(basket: Basket) {
    let id = basket.basketItems.find((it) => it.tableType == 6)?.rowID;
    if (id == this.product.id) return true;
    else return false;
  }

  addToBsk() {
    let product: BskItem = {
      count: 1,
      price: 0,
      rowID: this.product.id,
      tableType: 6,
      title: this.product.title,
      id: this._orderService.basket.value.basketItems.length + 1,
    };
    this._orderService.pushToBSK(product);
  }
  downloadDemo() {
    if (AuthService.loggedIn.value) {
      window.open(this.contentUrl + this.demoFile, '_blank');
    } else {
      this._orderService.toastError(
        'برای دانلود باید وارد حساب کاربری خود شوید'
      );
    }
  }
  //for demo modal
  openDemoModal() {
    this.modalStatus = true;
  }
  modalClosed(status: boolean) {
    this.modalStatus = status;
  }
  getUserneedRequest() {
    let formData = this.formDataInit;
    formData.firstName = this._firstName;
    formData.lastName = this._lastName;
    formData.email = this._email;
    formData.phoneNumber = this._phoneNumber;

    if (this.isValidEmail(formData)) {
      console.log('ok');
      this.status = 1;
      this.form.controls['firstName'].disable();
      this.form.controls['lastName'].disable();
      this.form.controls['email'].disable();
      this.form.controls['phoneNumber'].disable();
    } else {
      console.log(this.formControls);
      setTimeout(() => {
        this.formControls.forEach((it) => (it.hasErr = false));
      }, 2000);
      console.log('not valid');
    }
  }
  checkFormValidation(_formData: IDemoRequest) {
    return true;
  }
  isValidEmail(_formData: IDemoRequest): boolean {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isNull = false;
    let anyValue = false;

    if (!emailRegex.test(_formData.email)) {
      let emailEr = this.formControls.findIndex((x) => x.name == 'email');
      this.formControls[emailEr].hasErr = true;

      anyValue = true;
    }
    Object.entries(_formData).forEach(([key, value]) => {
      if (value == '' || value == null) {
        anyValue = true;
        let index = this.formControls.findIndex((x) => x.name == key);

        if (index != -1) {
          this.formControls[index].hasErr = true;
        }
      }
    });
    if (anyValue) {
      return false;
    }

    return true;
  }
}
