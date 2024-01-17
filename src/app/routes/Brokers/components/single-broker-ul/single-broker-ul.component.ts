import { Component, Input } from '@angular/core';
import { SingleBrokerULModel } from '../single-broker/single-broker.model';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-single-broker-ul',
  templateUrl: './single-broker-ul.component.html',
  styleUrls: ['./single-broker-ul.component.scss'],
})
export class SingleBrokerUlComponent {
  originalOrder = (
    _a: KeyValue<keyof SingleBrokerULModel, string | number | boolean>,
    _b: KeyValue<keyof SingleBrokerULModel, string | number | boolean>
  ): number => {
    return 0;
  };
  @Input('data') brokerData: SingleBrokerULModel = new SingleBrokerULModel();
  @Input('load') dataLoaded: boolean = false;
}
