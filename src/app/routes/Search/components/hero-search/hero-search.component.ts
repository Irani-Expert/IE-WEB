import { Component, Input } from '@angular/core';
import { SearchModel } from 'src/app/classes/interfaces/search.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent {
  @Input('data') searchModel : SearchModel;

  savedItem : any;
  

  constructor(private router: Router , private _activatedRoute: ActivatedRoute ) {}
  
  ngOnInit(){
    this.loading = false;
    this._searchInputSubscription = this._searchinput
    .pipe(debounceTime(700))
    .subscribe((value) => {
      this.searchFilterName(value);
    });

    this._activatedRoute.queryParams.subscribe(async (item) => {
      this.savedItem = { ...item };
    })
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
