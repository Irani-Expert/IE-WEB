import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription, debounceTime } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent {
  savedItem: any;

  constructor(
    private router: Router,
    private _activatedRoute: ActivatedRoute,
    private toaster : ToastrService
  ) {}

  ngOnInit() {
    this.loading = false;
    this._searchInputSubscription = this._searchinput
      .pipe(debounceTime(800))
      .subscribe((value) => {
        if (value.split('').length >= 3){
          this.searchFilterName(value);  
        }
        else {
          this.toaster.error('حداقل باید 3 کاراکتر باید برای سرچ ارسال گردد');
        }

      });

    this._activatedRoute.queryParams.subscribe(async (item) => {
      this.savedItem = { ...item };
    });
  }

  _searchInputSubscription: Subscription;
  _searchinput: Subject<string> = new Subject<string>();
  loading: boolean = true;

  fillValue(value: string) {
      this._searchinput.next(value);
  }

  searchFilterName(value: string) {
      this.router.navigateByUrl(`search?search=${value}`);
  }
}
