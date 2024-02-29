import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserClaimService } from 'src/app/classes/services/user-claim.service';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CommonModule],
  // providers: [UserClaimService],
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent {
  constructor(public _userClaimService: UserClaimService) {
    this._userClaimService.getFavs();
  }
}
