import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor() { }

  @HostBinding('style.background') private background;

  @HostListener('click') public onClick(event) {
    this.background = 'aqua';
  }

  @HostListener('mouseenter') public onMouseEnter(event) {
    this.background = 'red';
  }

}
