import { NgModule } from '@angular/core';
import { LandigMoneyMComponent } from '../components/landig-money-m/landig-money-m.component';
import { MoneymRoutingModule } from './money-m.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeroMComponent } from '../components/hero-m/hero-m.component';

const components =[
LandigMoneyMComponent,
HeroMComponent,

]


@NgModule({
    declarations: [components],
    imports: [
        MoneymRoutingModule,
        SharedModule
    ]
})

export class MoneymModule { }
