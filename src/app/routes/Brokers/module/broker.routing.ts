import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingBrokerDetailComponent } from '../components/landing-broker-detail/landing-broker-detail.component';

const routes: Routes = [
  { path: '', component: LandingBrokerDetailComponent },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class BrokerRoutingModule {}