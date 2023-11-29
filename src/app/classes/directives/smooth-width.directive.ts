import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[smoothWidth]',
  standalone: true,
})
export class SmoothWidthDirective {
  @Input()
  smoothWidth: any;
  pulse!: boolean;
  startWidth!: number;

  constructor(private element: ElementRef) {}

  @HostBinding('@grow')
  get grow() {
    return { value: this.pulse, params: { startWidth: this.startWidth } };
  }

  setStartWidth() {
    this.startWidth = this.element.nativeElement.clientWidth;
  }

  ngOnChanges(_changes: any) {
    this.setStartWidth();
    this.pulse = !this.pulse;
  }
}
