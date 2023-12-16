import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderLayoutComponent } from './components/header-layout/header-layout.component';
import { HeaderLgComponent } from './components/header-layout/header-lg/header-lg.component';
import { HeaderSmComponent } from './components/header-layout/header-sm/header-sm.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderSearchComponent } from './components/header-layout/header-lg/search/search.component';
import { SharedModule } from './shared/shared.module';
import { BaseService } from './classes/services/base.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './shared/modal/modal.component';
import { AuthModule } from './shared/auth/auth.module';
import { RatingComponent } from './shared/rating/rating.component';
import { Checkbox } from './shared/checkbox/checkbox.component';
import { FilterComponent } from './shared/filter/filter.component';
import { SearchComponent } from './shared/filter/search-bar/search.component';
import { LoaderInterceptor } from './classes/loader.interceptor';
import { LottieModule } from 'ngx-lottie';
import { LoaderComponent } from './components/loader/loader.component';
export function playerFactory(): any {
  return import('lottie-web');
}
// Headeer Comps
const header = [
  HeaderLayoutComponent,
  HeaderLgComponent,
  HeaderSmComponent,
  HeaderSearchComponent,
];
// Footer Comps
const footer = [FooterComponent];
@NgModule({
  declarations: [AppComponent, header, footer],
  imports: [
    ModalComponent,
    AuthModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FilterComponent,
    RatingComponent,
    Checkbox,
    SearchComponent,
    LoaderComponent,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    BaseService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
