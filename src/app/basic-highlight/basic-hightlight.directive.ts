// import { element } from 'protractor';
import { Directive, ElementRef } from "@angular/core";


@Directive({
  selector:'[basicHighlight]', // camelCase always

})
export class BasicHightlightDirective{
  constructor(private elementRef: ElementRef){} // to access the element this directive sits

  // doesn't have other lifecycle hooks because there is no temp;ate associated with a directive

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(){
    // tslint:disable-next-line:no-unused-expression
    this.elementRef.nativeElement.style.backgroundColor = 'green';

  }
  ngOnDestroy(){

  }
}
