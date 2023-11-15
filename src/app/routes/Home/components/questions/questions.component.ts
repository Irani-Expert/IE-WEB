import { Component  } from '@angular/core';
// import { config } from 'src/app/shared/acordian/types';
// import { FAQ } from './interfaces/faq-interfce';
// import { FaqService } from './service/faq.service';
// import {lastValueFrom} from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  // questionFaq : FAQ[];

  // async ngOnInit(){
  //  const res = this.faq.get('FAQ/GetByTableTypeAndRowID/1/6');
  //   this.questionFaq = (await lastValueFrom(res)).data!;
  // }
  // constructor(private faq : FaqService){
  // }
  // options: config = { multi: false };
  


  name = 'Angular';
  isActive = 1;

  next() {
    if (this.isActive == 3) this.isActive = 0;
    this.isActive ++;
  }
  pre() {
    this.isActive --;
    if (this.isActive == 0) this.isActive = 3;
  }
}
