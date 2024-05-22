import { Component  } from '@angular/core';
import { config } from 'src/app/shared/acordian/types';
import { FAQ } from './interfaces/faq-interfce';
import { FaqService } from './service/faq.service';
import {lastValueFrom} from 'rxjs';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  options: config = { multi: false };

  constructor(private faq : FaqService){
  }
  
  questionFaq : FAQ[];

  async ngOnInit(){
  if (AppComponent.isBrowser.value){    
    const res = this.faq.get('FAQ/GetByTableTypeAndRowID/1/6');
     this.questionFaq = (await lastValueFrom(res)).data!;
  }
  }
  
}
