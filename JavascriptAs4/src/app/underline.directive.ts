import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective {
  @Input () deco: string;
  constructor(private elm: ElementRef) { }
  @HostListener ('mouseover') onMouseOver() {
    this.check(this.deco);
  }
  @HostListener ('mouseout') onMouseOut() {
    this.check('none');
  }
  private check(style) {
    this.elm.nativeElement.style.textDecoration = style;
  }
}
