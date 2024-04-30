import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AcordianComponent } from './acordian/acordian.component';
import { CommonModule, DatePipe } from '@angular/common';
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
import { BlogFilterComponent } from './blog-filter/blog-filter.component';
import { VoicePlayerComponent } from './voice-player/voice-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VoteComponent } from './vote/vote.component';
import { FreeAdviceComponent } from '../routes/Home/free-advice/free-advice.component';
import { ConsultationFormComponent } from '../routes/Home/components/consultation-form/consultation-form.component';
import { ShareLinkBoxComponent } from './share-link-box/share-link-box.component';
import { SectorFilterComponent } from './sector-filter/sector-filter.component';
import { FilterPipe } from 'src/ts/filterNgfor.pipe';
import { SymbolsComponent } from '../routes/calendar/symbols/symbols.component';
import { NgxTippyModule } from 'ngx-tippy-wrapper';
import { DatePickerComponent } from './date-picker/date-picker.component';
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
  ScrollComponent,
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
  ShareLinkBoxComponent,
  SectorFilterComponent,
  SymbolsComponent,
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
    ScrollComponent,
    NotFoundComponent,
    ContentMenuComponent,
    ShareLinkBoxComponent,
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
