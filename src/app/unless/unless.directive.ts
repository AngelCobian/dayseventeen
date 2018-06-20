import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {
 @Input() set unless(condition: boolean){
   //implments setter to turn a property into a method.
   // it is still a property but judt a setter of that property.
   if(!condition){
     // display something here
     // tslint:disable-next-line:max-line-length
     this.vcRef.createEmbeddedView(this.templateRef); // create a new view in the view container. display templateref content in this new view

   } else {
     // display something else here
    this.vcRef.clear(); // clear everything form this container
   }
 }

  constructor(private templateRef: TemplateRef<any>,
  private vcRef: ViewContainerRef) { } // template = what, vcRef = where

}
