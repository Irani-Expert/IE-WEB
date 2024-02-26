import { Component, Input } from '@angular/core';
import { SingleBrokerULModel } from '../single-broker/single-broker.model';
import { originalOrderKeyValues } from 'src/app/classes/originalOrderKeys';

@Component({
  selector: 'app-single-broker-ul',
  templateUrl: './single-broker-ul.component.html',
  styleUrls: ['./single-broker-ul.component.scss'],
})
export class SingleBrokerUlComponent {
  originalOrder = originalOrderKeyValues<SingleBrokerULModel>;
  @Input('data') brokerData: SingleBrokerULModel = new SingleBrokerULModel();
  @Input('load') dataLoaded: boolean = false;
  @Input('hasVideo') videoExist = false;
}
