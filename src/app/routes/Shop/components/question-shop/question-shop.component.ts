import { Component } from '@angular/core';
import { config } from 'src/app/shared/acordian/types';
import { FAQ } from 'src/app/routes/Home/components/questions/interfaces/faq-interfce';
import { FaqService } from 'src/app/routes/Home/components/questions/service/faq.service';
import {lastValueFrom} from 'rxjs';

@Component({
  selector: 'app-question-shop',
  templateUrl: './question-shop.component.html',
  styleUrls: ['./question-shop.component.scss']
})
export class QuestionShopComponent {
  questionFaq : FAQ[];

  async ngOnInit(){
   const res = this.faq.get('FAQ/GetByTableTypeAndRowID/1/6');
    this.questionFaq = (await lastValueFrom(res)).data!;
  }
  constructor(private faq : FaqService){
  }
  options: config = { multi: false };

}
