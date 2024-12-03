import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appAppFocusHighlight]',
  standalone: true
})
export class AppFocusHighlightDirective {

  //Waiting to teceive a colour from the parent component when called
  @Input() appHoverHighlight = '';
  //elementRef allows us to access the native DOM element assoiciated with the directive
  constructor(private el: ElementRef) {}
  /*
  @HostListener('mouseenter'): This method is triggered when the mouse enters the element. It calls the highlight method, passing in
  either the color specified in appHoverHighlight or a default color of yellow if none is provided.
  @HostListener('mouseleave'): This method is triggered when the mouse leaves the element. It calls the highlight method with an
  empty string, effectively removing the background color.
   */
  @HostListener('onFocus') onMouseEnter() {
    this.highlight(this.appHoverHighlight || 'yellow'); //Default colour just incase
  }
  @HostListener('blur') onMouseLeave() {
    this.highlight('');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
