import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CarouselImage } from './carousel';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { ModalService } from '../modal/services/modal.service';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: 'carousel.component.html',
  imports: [CommonModule, ModalComponent],
  animations: [
    trigger('move', [
      state('default', style({ transform: 'translateX(0)' })),
      state(
        'transformed',
        style({ transform: 'translateX(var(--translate-x))' })
      ),
      transition('transformed => default', animate('200ms ease-out')),
      transition('default => transformed', animate('200ms ease-in')),
    ]),
  ],
})
export class CarouselComponent {
  showModal: boolean = false;
  @Input('max-width') maxWidth: string = '365px';
  // indexHolder = -1;
  translateX = '';
  state: 'default' | 'transformed' = 'default';
  selectedItem: CarouselImage;
  gallery: CarouselImage[] = [
    {
      id: 1,
      src: 'assets/img/Expert 2.png',
    },
    {
      id: 2,
      src: 'assets/img/Expert 1.png',
    },
    {
      id: 3,
      src: 'assets/img/Expert 2.png',
    },
    {
      id: 4,
      src: 'assets/img/Expert 1.png',
    },
  ];
  // @Input('images') gallery: CarouselImage[]
  zoomUrl = `url("../../assets/icon/plus-zoom.svg")`;
  unzoomUrl = `url("../../assets/icon/minus-zoom.svg")`;
  constructor(private modal: ModalService) {
    // this.modalStatus = this.modal.modalStatusSubject;
  }
  get _indexSelectedItem() {
    return this.gallery.findIndex((it) => it.id == this.selectedItem.id);
  }
  ngOnInit() {
    this.selectItem(this.gallery[0]);
  }
  selectItem(item: CarouselImage) {
    this.selectedItem = item;
  }
  rightClick(id: number) {
    this.setAnimation('right');
    setTimeout(() => {
      if (id == 0) {
        this.selectItem(this.gallery[this.gallery.length - 1]);
      } else {
        this.selectItem(this.gallery[this._indexSelectedItem - 1]);
      }
    }, 180);
  }
  leftClick(id: number) {
    this.setAnimation('left');
    setTimeout(() => {
      if (id == this.gallery.length - 1) {
        this.selectItem(this.gallery[0]);
      } else {
        this.selectItem(this.gallery[this._indexSelectedItem + 1]);
      }
    }, 180);
  }
  async setAnimation(type: 'left' | 'right') {
    if (type == 'right') {
      this.translateX = '-110%';
      this.state = 'transformed';
      setTimeout(() => {
        this.translateX = '110%';
        this.state = 'default';
      }, 200);
    }
    if (type == 'left') {
      this.translateX = '110%';
      this.state = 'transformed';
      setTimeout(() => {
        this.translateX = '-110%';
        this.state = 'default';
      }, 200);
    }
  }
  openGalleryModal() {
    this.showModal = true;

    this.modal.open().subscribe({
      next: (action) => {
        console.log(action);
      },
      complete: () => {
        this.showModal = false;
      },
    });
  }
}
