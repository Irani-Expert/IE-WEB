import { Component, Input } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { ILottieConfig, LottieConfigModel } from './lottie-config';
@Component({
  selector: 'app-lottie',
  templateUrl: './lottie.component.html',
})
export class LottieComponent {
  @Input('config') config: ILottieConfig;
  lottie: LottieConfigModel;
  options: AnimationOptions;
  constructor() {}
  ngOnInit() {
    this.lottie = new LottieConfigModel(this.config);
    this.options = {
      path: this.config.path,
      loop: this.config.loop ? this.config.loop : true,
    };
  }
  // ngOnDestroy() {
  // }
  // ngAfterViewInit() {}
}
