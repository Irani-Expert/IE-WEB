import { Component } from '@angular/core';
import {lastValueFrom} from 'rxjs';
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
  constructor( private searchServices : searchServices ){

    }
    async ngOnInit(){
      const resualt = this.searchServices.get('Search');
      this.searchModel = (await lastValueFrom(resualt)).data!;
      this.loading = false;

    }
}
