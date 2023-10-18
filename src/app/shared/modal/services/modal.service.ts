import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modalStatusSubject = new BehaviorSubject<boolean>(false);
  private modalNotifier?: Subject<string>;
  constructor() {}
  open() {
    this.modalStatusSubject.next(true);
    this.modalNotifier = new Subject();
    return this.modalNotifier?.asObservable();
  }

  closeModal() {
    this.modalNotifier?.complete();
    this.modalStatusSubject.next(false);
  }

  submitModal() {
    this.modalNotifier?.next('confirm');
    this.closeModal();
  }
}
