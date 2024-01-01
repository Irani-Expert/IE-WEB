import { Component, Input } from '@angular/core';
import { SearchModel } from 'src/app/classes/interfaces/search.interface';
import { Router } from '@angular/router';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent {
  @Input('data') searchModel : SearchModel;
  constructor(private router: Router) {}
  
  ngOnInit(){
    this.loading = false;
    this._searchInputSubscription = this._searchinput
    .pipe(debounceTime(700))
    .subscribe((value) => {
      this.searchFilterName(value);
    });
  }

  _searchInputSubscription: Subscription;
  _searchinput: Subject<string> = new Subject<string>();
  loading: boolean = true;

  fillValue(value: string) {
    this._searchinput.next(value);
  }
  
  searchFilterName(value: string) {
    this.router.navigateByUrl(`search?someThing=${value}`);
  }


}
