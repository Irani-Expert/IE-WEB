import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  isSearchClicked: boolean = false;

  isSearchOpened(){
    this.isSearchClicked = !this.isSearchClicked
  }
}
