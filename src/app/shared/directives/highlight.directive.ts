import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostBinding('style.background') private background;

  @HostListener('click') public onClick() {
    this.background = 'aqua';
  }

  @HostListener('mouseenter') public onMouseEnter() {
    this.background = '#f6aadb';
  }

  @HostListener('mouseleave') public onMouseLeave() {
    this.background = this.el.nativeElement.background;
  }

}
