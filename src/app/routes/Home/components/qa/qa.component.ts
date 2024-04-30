import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.scss'],
})
export class QAComponent implements OnInit {
  @ViewChild('listElemHide') listElemHide: ElementRef;

  ngOnInit(): void {}
  @Input('Q') question = '';
  @Input('A') answer = '';
  iconActive: boolean = false;

  toggleMenu() {
    this.iconActive = !this.iconActive;
  }
}
