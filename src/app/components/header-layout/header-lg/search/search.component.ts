import { Component } from '@angular/core';

@Component({
  selector: 'app-search-header',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class HeaderSearchComponent {
  isSearchClicked: boolean = false;

  isSearchOpened() {
    this.isSearchClicked = !this.isSearchClicked;
  }
  onEvent(event: Event) {
    event.stopPropagation();
  }
}
