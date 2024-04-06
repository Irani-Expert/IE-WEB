import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-header',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class HeaderSearchComponent {
  isSearchClicked: boolean = false;
  onHover :boolean;

  mouseHover(){
    this.onHover = true;
  }
  
  mouseUnHover(){
    this.onHover = false;
  }

  isSearchOpened() {
    this.isSearchClicked = !this.isSearchClicked;
  }
  onEvent(event: Event) {
    event.stopPropagation();
  }

  constructor(private router: Router , private toastr : ToastrService) {}

  ngOnInit() {
    this.loading = false;
    this._searchInputSubscription = this._searchinput
      .pipe(debounceTime(700))
      .subscribe((value) => {
        this.searchFilterName(value);
      });
  }
  // ==========[عملکرد سرچ]======
  loading: boolean = true;
  _searchInputSubscription: Subscription;
  _searchinput: Subject<string> = new Subject<string>();

  fillValue(value: string) {
    this._searchinput.next(value);
  }

  searchFilterName(value: string) {
    if (value.length <= 2 ) {
      this.toastr.error('حداقل باید 3 کاراکتر باید برای سرچ ارسال گردد');
    }
    else {
      this.router.navigateByUrl(`search?search=${value}`);
    }
  }
}
