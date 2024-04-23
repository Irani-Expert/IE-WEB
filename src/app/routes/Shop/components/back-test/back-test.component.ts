import { Component, Input } from '@angular/core';
import { Backtest } from 'src/app/classes/interfaces/backtest.interface';
import { environment } from 'src/environments/environment.dev';


@Component({
  selector: 'app-back-test',
  templateUrl: './back-test.component.html',
  styleUrls: ['./back-test.component.scss']
})
export class BackTestComponent {

  @Input('data') data : Backtest[];
  videoUrl : string;
  contentUrl = environment.contentUrl;

  ngOnInit(){

    this.videoUrl = this.contentUrl + this.data[0].videoUrl;
    console.log(this.videoUrl);

  }
}
