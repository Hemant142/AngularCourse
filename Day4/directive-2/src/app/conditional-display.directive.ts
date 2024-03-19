import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appConditionalDisplay]'
})
export class ConditionalDisplayDirective {
  @Input() appConditionalDisplay: boolean = true;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (this.appConditionalDisplay) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
    }
  }
}
