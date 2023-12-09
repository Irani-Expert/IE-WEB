import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingBrokerDetailComponent } from '../components/landing-broker-detail/landing-broker-detail.component';
import { BrokerRoutingModule } from './broker.routing';
import { TableBrokersComponent } from '../components/table-brokers/table-brokers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrokerImgCardComponent } from '../components/broker-img-card/broker-img-card.component';
import { BrokersHeroComponent } from '../components/brokers-hero/brokers-hero.component';
import { TriangleComponent } from 'src/app/shared/triangle/triangle..component';
import { SingleBrokerComponent } from '../components/single-broker/single-broker.component';

const components = [
  LandingBrokerDetailComponent,
  TableBrokersComponent,
  BrokerImgCardComponent,
  BrokersHeroComponent,
  SingleBrokerComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, BrokerRoutingModule, SharedModule, TriangleComponent],
})
export class BrokerModule {}
