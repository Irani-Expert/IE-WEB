import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output('liked') liked = new EventEmitter<boolean>();

  contentLoaded = false;
  favId = 0;
  // favSubescription: Subscription;
  componentDisable: boolean = false;
  userSubsciption: Subscription;
  constructor(
    private _userClaimService: UserClaimService,
    private _auth: AuthService,
    private _modal: ModalService
  ) {}
  ngOnInit() {}
  ngAfterContentInit() {
    this.contentLoaded = true;
  }
  checkFavorited() {
    if (this.loggedIn)
      return this._userClaimService.checkFav(this.rowID, this.tableType);
    else return 0;
  }

  ngOnDestroy() {
    // this.favSubescription.unsubscribe();
    this.userSubsciption.unsubscribe();
  }

  async addFav() {
    this.componentDisable = true;
    let userId = this._auth._user.id;
    if (userId !== 0) {
      const res = await this._userClaimService.addFav(
        this.rowID,
        this.tableType,
        userId
      );
      if (res) this.liked.emit(true);
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
    let id = this.checkFavorited();
    const res = await this._userClaimService.removeFav(id);
    if (res) {
      this.liked.emit(false);
    }
    this.componentDisable = false;
  }

  get loggedIn() {
    return AuthService.loggedIn;
  }
}
