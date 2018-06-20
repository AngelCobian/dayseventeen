import { Directive, Renderer2, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[BetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2,
  private elementRef: ElementRef) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // Fourth argument is optional, We can set !importent in that argument
  }

    @HostListener('mouseenter') mouseEnter(){ // Hostlistener decorator is added to a method we want to execute on event
      // listening for mouseenter event on host
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    }
    @HostListener('mouseleave') mouseOut(){
      // listening for mouseleave event on host
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'gray');
    }
}
