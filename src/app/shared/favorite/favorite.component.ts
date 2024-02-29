import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserClaimService } from 'src/app/classes/services/user-claim.service';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent {
  @Input('id') rowID: number = 0;
  @Input('tableType') tableType: number = 0;
  contentLoaded = false;
  constructor(public _userClaimService: UserClaimService) {}

  ngAfterContentInit() {
    this.contentLoaded = true;
  }
  get isFavorited() {
    let res = this._userClaimService.checkFav(this.rowID, this.tableType);

    return res;
  }
}
