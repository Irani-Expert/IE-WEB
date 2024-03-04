import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinkService } from 'src/app/classes/services/link.service';
import { searchServices } from 'src/app/classes/services/search.services';

@Component({
  selector: 'app-landing-search',
  templateUrl: './landing-search.component.html',
  styleUrls: ['./landing-search.component.scss'],
})
export class LandingSearchComponent {
  loading: boolean = true;

  constructor(
    private searchServices: searchServices,
    private _activatedRoute: ActivatedRoute,
    private _linkService: LinkService
  ) {
    this._linkService.createLink(`https://www.iraniexpert.com/search`);
  }
  async ngOnInit() {
    this._activatedRoute.queryParams.subscribe(async (item) => {
      if (await this.searchServices.getItems(item['search'])) {
        this.loading = false;
      }
    });
  }
}
