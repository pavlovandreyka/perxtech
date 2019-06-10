import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInsertText]'
})
export class InsertTextDirective {
  @Input() set message(str: string) {
     this.el.nativeElement.innerText = str;
  }
  constructor(private el: ElementRef) {
  }

}
