import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private originalText: string = ''; 

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {

    this.originalText = this.el.nativeElement.textContent;

    this.el.nativeElement.textContent = this.originalText.toUpperCase();
  
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
   
    this.el.nativeElement.textContent = this.originalText;

    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
