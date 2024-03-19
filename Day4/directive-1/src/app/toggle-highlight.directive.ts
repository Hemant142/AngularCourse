import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleHighlight]'
})
export class ToggleHighlightDirective {
  private colors: string[] = ['red', 'green'];
  private currentIndex: number = 0;

  @HostBinding('style.backgroundColor') backgroundColor: string = this.colors[this.currentIndex];

  @HostListener('click') onClick() {
    this.currentIndex = (this.currentIndex + 1) % this.colors.length;
    this.backgroundColor = this.colors[this.currentIndex];
  }

  constructor() { }

}
