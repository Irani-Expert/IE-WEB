import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderLayoutComponent } from './components/header-layout/header-layout.component';
import { HeaderLgComponent } from './components/header-layout/header-lg/header-lg.component';
// import { HeaderSmComponent } from './components/header-layout/header-sm/header-sm.component';
import { HeaderMobileComponent } from './components/header-layout/header-mobile/header-mobile.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderSearchComponent } from './components/header-layout/header-lg/search/search.component';
import { SharedModule } from './shared/shared.module';
import { BaseService } from './classes/services/base.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './shared/modal/modal.component';
import { AuthModule } from './shared/auth/auth.module';
import { Checkbox } from './shared/checkbox/checkbox.component';

import { LoaderInterceptor } from './classes/loader.interceptor';
import { LottieModule } from 'ngx-lottie';
import { LoaderComponent } from './components/loader/loader.component';
import { ToastrModule } from 'ngx-toastr';
import { JWTInterceptor } from './classes/jwt.interceptor';
import { NgChartsModule } from 'ng2-charts';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { NgxCaptureModule } from 'ngx-capture';
// import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';

export function playerFactory(): any {
  return import('lottie-web');
}
// Headeer Comps
const header = [
  HeaderLayoutComponent,
  HeaderLgComponent,
  // HeaderSmComponent,
  HeaderSearchComponent,
  HeaderMobileComponent,
  // BreadcrumbsComponent,
  BreadCrumbComponent,
];
// Footer Comps
const footer = [FooterComponent];
@NgModule({
  declarations: [AppComponent, header, footer],
  imports: [
    ScrollToTopComponent,
    NgxCaptureModule,
    ModalComponent,
    AuthModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Checkbox,
    LoaderComponent,
    NgChartsModule,
    LottieModule.forRoot({ player: playerFactory }),
    ToastrModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideClientHydration(),
    BaseService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
