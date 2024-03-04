import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserClaimService } from 'src/app/classes/services/user-claim.service';
import { AuthService } from '../auth/auth.service';
import { ModalService } from '../modal/services/modal.service';
import { HeaderLayoutComponent } from 'src/app/components/header-layout/header-layout.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent {
  @Input({ required: true }) readonly: boolean;
  @Input({ required: true }) rowID: number = 0;
  @Input({ required: true }) tableType: number = 0;
  contentLoaded = false;
  favId = 0;
  favSubescription: Subscription;
  componentDisable: boolean = false;
  constructor(
    private _userClaimService: UserClaimService,
    private _auth: AuthService,
    private _modal: ModalService
  ) {}
  ngOnInit() {
    this.favSubescription = this._userClaimService.favoriteSubject
      .asObservable()
      .subscribe({
        next: (it) => {
          this.checkFavorited();
        },
      });
  }
  ngAfterContentInit() {
    this.contentLoaded = true;
  }
  checkFavorited() {
    this.favId = this._userClaimService.checkFav(this.rowID, this.tableType);
  }

  ngOnDestroy() {
    this.favSubescription.unsubscribe();
  }

  async addFav() {
    this.componentDisable = true;
    let userId = this._auth._user.id;
    if (userId !== 0) {
      await this._userClaimService.addFav(this.rowID, this.tableType, userId);
      this.componentDisable = false;
    } else {
      this.componentDisable = false;

      this.openModal();
    }
  }
  openModal() {
    this._modal.open().subscribe({
      complete: () => {
        HeaderLayoutComponent.modalStatus = false;
      },
    });
    HeaderLayoutComponent.modalStatus = true;
    HeaderLayoutComponent.modalView = 'login';
  }

  async removeFav() {
    this.componentDisable = true;
    await this._userClaimService.removeFav(this.favId);
    this.componentDisable = false;
  }
}
