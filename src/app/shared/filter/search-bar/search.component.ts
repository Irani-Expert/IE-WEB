import { Component, EventEmitter, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'search-bar',
  templateUrl: 'search.component.html',
  styles: [``],
  standalone: true,
})
export class SearchComponent {
  @Output('result') inputValue = new EventEmitter<string>();

  value: string | null = null;
  _searchInputSubscription: Subscription;
  _searchinput: Subject<string> = new Subject<string>();
  ngOnInit() {
    this._searchInputSubscription = this._searchinput
      .pipe(debounceTime(700))
      .subscribe((value) => {
        this.sendToParent(value);
      });
  }
  searchedInput() {
    this._searchinput.next(this.value!);
  }
  sendToParent(value: string) {
    this.inputValue.emit(value);
  }
  fillValue(value: string) {
    this.value = value;
    this.searchedInput();
  }
}
