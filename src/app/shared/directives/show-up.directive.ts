import {
  Directive,
  HostListener,
  ElementRef,
  Input,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appShowUp]',
})
export class ShowUpDirective {
  @Input() private color = 'deeppink';
  @HostBinding('style.color') private fontColor;
  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event']) onClick() {
    console.log('click');
    this.fontColor = this.color;
    this.el.nativeElement.style.border = '2px solid blue';
    ++this.el.nativeElement.style.fontSize;
  }
}
