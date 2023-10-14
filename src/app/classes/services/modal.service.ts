import { Injectable } from '@angular/core';
import { IModal } from '../modal.interface';

@Injectable()
export class ModalService implements IModal {
  openModal(ref: any) {
    throw new Error('Method not implemented.');
  }
  closeModal(ref: any) {
    throw new Error('Method not implemented.');
  }
  confrim(ref: any) {
    throw new Error('Method not implemented.');
  }
}
