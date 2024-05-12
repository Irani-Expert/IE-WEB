import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusTargetsComponent } from '../components/aboutus-targets/aboutus-targets.component';
import { AboutusTargetsResponsiveComponent } from '../components/aboutus-targets-responsive/aboutus-targets-responsive.component';
import { AboutUsComponent } from '../components/about-us-landing/about-us.component';
import { AboutUsRoutingModule } from './about-us.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommentSliderComponent } from '../components/comment-slider/comment-slider.component';
import { VideoSliderComponent } from '../components/video-slider/video-slider.component';

const components = [
  AboutusTargetsComponent,
  AboutusTargetsResponsiveComponent,
  AboutUsComponent,
  CommentSliderComponent,
  VideoSliderComponent,
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutUsModule { }
