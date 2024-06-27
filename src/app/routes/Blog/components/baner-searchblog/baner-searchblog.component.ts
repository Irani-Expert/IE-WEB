import { Component } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-baner-searchblog',
  templateUrl: './baner-searchblog.component.html',
  styleUrls: ['./baner-searchblog.component.scss']
})
export class BanerSearchblogComponent {
  
  constructor(private router: Router) {}


  value: string | null = null;
  _searchInputSubscription: Subscription;
  _searchinput: Subject<string> = new Subject<string>()
  
  ngOnInit() {
    this._searchInputSubscription = this._searchinput
      .pipe(debounceTime(700))
      .subscribe((value) => {
        this.searchFilterName(value);
      });
  }

  searchFilterName(value: string) {
    this.router.navigateByUrl(`articles/page/1?blogName=${value}`);
  }

  fillValue(value: string) {
    this._searchinput.next(value);
  }

}
