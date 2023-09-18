import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sell-info',
  templateUrl: './sell-info.component.html',
  styleUrls: ['./sell-info.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
        transition('*=>*', [
            style({top:'15px',
            opacity :0}),
            animate(600)
        ])
    ])
]
})
export class SellInfoComponent {
value:number=0
ngOnInit() {
    setInterval(() => {
        this.value++
      },1000)
}

}
