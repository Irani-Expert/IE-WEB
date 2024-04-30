import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Backtest } from 'src/app/classes/interfaces/backtest.interface';
import { environment } from 'src/environments/environment.dev';


@Component({
  selector: 'app-back-test',
  templateUrl: './back-test.component.html',
  styleUrls: ['./back-test.component.scss']
})
export class BackTestComponent {
  
  constructor(
    private _sanitizer : DomSanitizer
  ){
  
  }
  @Input('data') data : Backtest[];
  videoUrl : string;
  contentUrl = environment.contentUrl;
  articleHtml: SafeHtml;

  ngOnInit(){

    this.videoUrl = this.contentUrl + this.data[0].videoUrl;

    this.articleHtml = this._sanitizer.bypassSecurityTrustHtml(
      this.data[0].description
    );
  }
}
