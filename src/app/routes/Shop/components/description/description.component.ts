import { Component } from '@angular/core';
interface Base {
  id: number;
  title: string;
}
interface BotPrivilage extends Base {}
interface Requirments extends Base {
  isActive?: boolean;
  description: string;
}
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent {
  items: BotPrivilage[] = [
    {
      id: 1,
      title: 'امکان معامله روی تمامی جفت‌ارزها, نمادها و شاخص‌ها',
    },
    {
      id: 2,
      title: 'ارائه حساب دمو رایگان قبل از خرید ربات فارکس',
    },
    {
      id: 3,
      title: 'پارامترهای ورودی گسترده در Input',
    },
    {
      id: 4,
      title:'امکان نظارت انسانی با پنل Monitoring'
    },
    {
      id: 5,
      title: 'امکان معامله روی تمام بروکرها و انواع حساب‌ها',
    },
    {
      id: 6,
      title: 'امکان فیلترینگ زمانی برای کارنکردن در تایم‌های پرنوسان',
    },
    {
      id: 7,
      title: 'امکان پیاده‌سازی استراتژی شخصی',
    },
    {
      id: 8,
      title: 'تولیدشده توسط نخبگان ایرانی',
    },
    {
      id: 9,
      title: 'قیمت رقابتی نسبت به نمونه‌های مشابه',
    },
    {
      id: 10,
      title: 'آپدیت مداوم',
    },
    {
      id: 11,
      title: 'دو زبانه (فارسی - انگلیسی)',
    },
    {
      id: 12,
      title: 'امکان ریسک فری کردن معاملات',
    },
    {
      id: 13,
      title: 'امکان معامله در هر دو جهت بازار',
    },
  ];
  systemReq: Requirments[] = [
    {
      id: 1,
      title: 'سرور',
      description: 'متاتریدر 5',
    },
    {
      id: 2,
      title: 'سیستم عامل',
      description: 'ویندوز',
    },
  ];
  serverReq: Requirments[] = [
    {
      id: 1,
      title: 'GPU',
      description: 'نیازی نیست',
    },
    {
      id: 2,
      title: 'HDD',
      description: '5GB',
    },
    {
      id: 3,
      title: 'RAM',
      description: '2GB',
    },
    {
      id: 4,
      title: 'CPU',
      description: 'تک هسته',
    },
  ];
  accountReq: Requirments[] = [
    {
      id: 1,
      title: 'پلتفرم',
      description: 'متاتریدر 5',
    },
    {
      id: 2,
      title: 'حساب هج',
      description: 'دارد',
    },
    {
      id: 3,
      title: 'اهرم',
      description: '1:500',
    },
  ];
  tips: Base[] = [
    {
      id: 1,
      title:
        'نام جفت ارز معاملاتی را مطابق مارکت واچ در بروکرتان, در تنظیمات اولیه ربات پارامتر (Symnol Pair) عینا بنویسید.',
    },
    {
      id: 2,
      title:
        'اگر ربات را روی بیش از 1 چارت اجرا می‏کنید (چند اینستنس) حتما پارامتر Magic Number که مقدار عددی است، با چارت دیگر متفاوت باشد.',
    },
    {
      id: 4,
      title:
        'تنظیمات به دست آمده را در محیط Demo تست بگیرید، درصورتیکه نتیجه مطلوب حاصل شد، لایسنس را در محیط Real اجـرا فـرمایید.',
    },
    {
      id: 5,
      title:
        'اهرم معاملاتی حداقل 1:500 باشد و ترجیحا حساب اسلامی (Swap Free) باشد.',
    },
    {
      id: 6,
      title:
        'تایم فریم معاملاتی ربات بایستی مطابق با سرمایه شما باشد، مثلا هر 5000 دلار، تایم فریم 30 دقیقه کافیست. برای تنظیمات صحیح می توانید از پشتیبانی راهنمایی بگیرید.',
    },

    {
      id: 9,
      title:
        'جهت همکاری در فروش لایسنس، مشارکت در سود، اطلاع از تخفیف‌ها و... با ما ارتباط بگیرید.',
    },
    {
      id: 10,
      title:
        'جهت حمایت از ما و دیده شدن آموزش‏های تخصصی، پیج اینستاگرام و کانال تلگرام ایرانی اکسپرت را فــالــو کنید، به آدرس:   @IRani_Expert',
    },
  ];
}
