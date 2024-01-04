import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingBrokerDetailComponent } from '../components/landing-broker-detail/landing-broker-detail.component';
import { SingleBrokerComponent } from '../components/single-broker/single-broker.component';

const routes: Routes = [
  { path: '', component: LandingBrokerDetailComponent },
  { path: ':title', component: SingleBrokerComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrokerRoutingModule {}
