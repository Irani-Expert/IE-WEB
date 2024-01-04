import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {lastValueFrom, map} from 'rxjs';
import { SearchModel } from 'src/app/classes/interfaces/search.interface';
import { searchServices } from 'src/app/classes/services/search.services';


@Component({
  selector: 'app-landing-search',
  templateUrl: './landing-search.component.html',
  styleUrls: ['./landing-search.component.scss']
})
export class LandingSearchComponent {
  loading: boolean = true;

  searchModel : SearchModel;
  constructor( private searchServices : searchServices, private _activatedRoute: ActivatedRoute ){}
    async ngOnInit(){
      this._activatedRoute.queryParams.subscribe(item=> this.getItems(item['someThing']))
      
    }
    getItems(someThing:string) {
      let res = this.searchServices.get(`Search?someThing=${someThing}`).pipe(map(data=> {
        this.searchModel  = data.data!
        this.loading = false
        return data.success
      }));
      return lastValueFrom(res)
    }
}
