import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AcordianComponent } from './acordian/acordian.component';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { Toggler } from './toggler/toggler.component';
import { ScrollComponent } from './scroll/scroll.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VideoPlayerComponent } from '../routes/Home/components/video-player/video-player.component';
import { TagsComponent } from './tags/tags.component';
import { LottieComponent } from './lottie/lottie.component';
import { LottieModule } from 'ngx-lottie';
import { ContentMenuComponent } from './content-menu/content-menu.component';
import { InstagramBanerComponent } from '../routes/Home/components/instagram-baner/instagram-baner.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { QuickAccessComponent } from './quick-access/quick-access.component';

const components = [
  AcordianComponent,
  CommentsComponent,
  TagsComponent,
  ScrollComponent,
  VideoPlayerComponent,
  LottieComponent,
  ContentMenuComponent,
  InstagramBanerComponent,
  QuickAccessComponent,
];
@NgModule({
  imports: [CommonModule, Toggler, LottieModule, DragScrollModule],
  exports: [components, LottieModule, DragScrollModule],
  declarations: [
    components,
    ScrollComponent,
    NotFoundComponent,
    ContentMenuComponent,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
