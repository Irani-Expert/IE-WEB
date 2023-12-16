import { Component, ViewChild } from '@angular/core';
import { ILottieConfig } from 'src/app/shared/lottie/lottie-config';
import { LottieComponent } from 'src/app/shared/lottie/lottie.component';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss'],
})
export class BannersComponent {
  @ViewChild(LottieComponent, { static: false })
  appLottie: LottieComponent;
  lottieConfig: ILottieConfig = {
    width: '100%',
    height: 'auto',
    path: './assets/lottie/podcast.json',
    max_w: '165px',
  };
  ngOnInit() {}
}
