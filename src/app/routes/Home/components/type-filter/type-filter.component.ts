import { Component } from '@angular/core';

@Component({
  selector: 'app-type-filter',
  templateUrl: './type-filter.component.html',
  styleUrls: ['./type-filter.component.scss'],
})
export class TypeFilterComponent {
  opened: boolean = true;
  droupMenw() {
    this.opened = !this.opened;
  }
}
