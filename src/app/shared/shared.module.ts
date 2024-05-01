import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AcordianComponent } from './acordian/acordian.component';
import { CommonModule, DatePipe } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { Toggler } from './toggler/toggler.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { TagsComponent } from './tags/tags.component';
import { LottieComponent } from './lottie/lottie.component';
import { LottieModule } from 'ngx-lottie';
import { ContentMenuComponent } from './content-menu/content-menu.component';
import { InstagramBanerComponent } from '../routes/Home/components/instagram-baner/instagram-baner.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { BlogFilterComponent } from './blog-filter/blog-filter.component';
import { VoicePlayerComponent } from './voice-player/voice-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VoteComponent } from './vote/vote.component';
import { FreeAdviceComponent } from './free-advice/free-advice.component';
import { ConsultationFormComponent } from '../routes/Home/components/consultation-form/consultation-form.component';
import { SectorFilterComponent } from '../routes/calendar/sector-filter/sector-filter.component';
import { FilterPipe } from 'src/ts/filterNgfor.pipe';
import { NgxTippyModule } from 'ngx-tippy-wrapper';
import { DatePickerComponent } from '../routes/calendar/date-picker/date-picker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {
  DefaultMatCalendarRangeStrategy,
  MatRangeDateSelectionModel,
} from '@angular/material/datepicker';
import { FavoriteComponent } from './favorite/favorite.component';
import { FilterResponsiveComponent } from './filter-responsive/filter-responsive.component';
import { Spinner } from './spinner/spinner.component';
import { FaqBlogComponent } from '../routes/Blog/components/faq-blog/faq-blog.component';

const components = [
  AcordianComponent,
  FaqBlogComponent,
  FilterResponsiveComponent,
  CommentsComponent,
  TagsComponent,
  DatePickerComponent,
  VideoPlayerComponent,
  LottieComponent,
  ContentMenuComponent,
  InstagramBanerComponent,
  BlogFilterComponent,
  VoicePlayerComponent,
  VoteComponent,
  FreeAdviceComponent,
  ConsultationFormComponent,
  SectorFilterComponent,
];
@NgModule({
  imports: [
    CommonModule,
    Toggler,
    LottieModule,
    DragScrollModule,
    FormsModule,
    ReactiveFormsModule,
    NgxTippyModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FavoriteComponent,
    Spinner,
  ],
  exports: [
    components,
    LottieModule,
    DragScrollModule,
    NgxTippyModule,
    FavoriteComponent,
  ],
  declarations: [
    components,
    NotFoundComponent,
    ContentMenuComponent,
    FilterPipe,
  ],
  providers: [
    DefaultMatCalendarRangeStrategy,
    MatRangeDateSelectionModel,
    DatePipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
