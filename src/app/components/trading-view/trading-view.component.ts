import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from 'src/app/app.component';
import { tvconfig } from './tv-config';
import { BehaviorSubject } from 'rxjs';
declare const TradingView: any;

@Component({
  selector: 'app-trading-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trading-view.component.html',
  styleUrls: ['./trading-view.component.scss'],
})
export class TradingViewComponent {
  static isTVShowing = new BehaviorSubject(false);
  constructor() {}

  ngAfterViewInit() {}
  static createView() {
    if (AppComponent.isBrowser.value) {
      TradingViewComponent.isTVShowing.next(true);
      new TradingView.widget(tvconfig);
    } else {
      console.log('TV Embeding Refused: SSR => Platform is Not Browser');
    }
  }
  get tvStatus() {
    return TradingViewComponent.isTVShowing.value ? 'block' : 'hidden';
  }
}
