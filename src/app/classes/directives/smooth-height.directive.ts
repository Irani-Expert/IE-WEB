import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[smoothHeight]',
  standalone: true,
})
export class SmoothHeightDirective {
  @Input()
  smoothHeight: any;
  pulse!: boolean;
  startHeight!: number;

  constructor(private element: ElementRef) {}

  @HostBinding('@grow')
  get grow() {
    return { value: this.pulse, params: { startHeight: this.startHeight } };
  }

  setStartHeight() {
    this.startHeight = this.element.nativeElement.clientHeight;
  }

  ngOnChanges(_changes: any) {
    this.setStartHeight();
    this.pulse = !this.pulse;
  }
}
