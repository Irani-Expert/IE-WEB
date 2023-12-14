import { Component } from '@angular/core';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss'],
})
export class BannersComponent {
  lottieConfig = {
    width: '100%',
    height: 'auto',
    path: './assets/lottie/microphone.json',
  };
  ngOnInit() {}
}
