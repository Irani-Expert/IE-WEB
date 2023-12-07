import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingBrokerDetailComponent } from '../components/landing-broker-detail/landing-broker-detail.component';
import { BrokerRoutingModule } from './broker.routing';

const components =[
  LandingBrokerDetailComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    BrokerRoutingModule
  ]
})
export class BrokerModule { }
