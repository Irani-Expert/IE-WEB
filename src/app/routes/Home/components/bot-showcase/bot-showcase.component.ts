import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bot-showcase',
  templateUrl: './bot-showcase.component.html',
  styleUrls: ['./bot-showcase.component.scss']
})
export class BotShowcaseComponent {
  @Output('scroll') isEmited = new EventEmitter<boolean>
  
  scrollToView() {
    this.isEmited.emit(true)
  }
}
