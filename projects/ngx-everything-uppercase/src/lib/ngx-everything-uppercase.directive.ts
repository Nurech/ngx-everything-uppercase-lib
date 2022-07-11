import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[makeTextUppercase]'
})
export class MakeTextDirective {
  constructor(private el: ElementRef) {
    setTimeout(() => {
      this.el.nativeElement.innerText = this.el.nativeElement.innerText.toUpperCase();
    })
  }
}
