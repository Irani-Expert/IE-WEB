import { Component } from '@angular/core';
import { config } from 'src/app/shared/acordian/types';
import { FAQ } from 'src/app/routes/Home/components/questions/interfaces/faq-interfce';
import { FaqService } from 'src/app/routes/Home/components/questions/service/faq.service';
import {lastValueFrom} from 'rxjs';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-question-shop',
  templateUrl: './question-shop.component.html',
  styleUrls: ['./question-shop.component.scss']
})
export class QuestionShopComponent {
  questionFaq : FAQ[];
  options: config = { multi: false };
  
  constructor(private faq : FaqService){
  }
  
  async ngOnInit(){
    if (AppComponent.isBrowser.value){
      const res = this.faq.get('FAQ/GetByTableTypeAndRowID/1/6');
       this.questionFaq = (await lastValueFrom(res)).data!;
    }
  }

}
