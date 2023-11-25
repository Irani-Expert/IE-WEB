import { Component } from '@angular/core';
import { config } from 'src/app/shared/acordian/types';
import { FAQ } from 'src/app/routes/Home/components/questions/interfaces/faq-interfce';
import { FaqService } from 'src/app/routes/Home/components/questions/service/faq.service';
import {lastValueFrom} from 'rxjs';


@Component({
  selector: 'app-bot-options',
  templateUrl: './bot-options.component.html',
  styleUrls: ['./bot-options.component.scss']
})
export class BotOptionsComponent {
  questionFaq : FAQ[];

  async ngOnInit(){
   const res = this.faq.get('FAQ/GetByTableTypeAndRowID/1/6');
    this.questionFaq = (await lastValueFrom(res)).data!;
  }
  constructor(private faq : FaqService){
  }
  options: config = { multi: false };
  

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior:"smooth"});
  }
  
}
