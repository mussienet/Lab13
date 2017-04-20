import { Directive,ElementRef,AfterViewInit} from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {
  constructor(private element: ElementRef) {
                element.nativeElement.style.fontSize='22px';
    }
    
    ngAfterViewInit(){
      var itemValue = this.element.nativeElement.innerText;
      this.element.nativeElement.innerText=itemValue.toUpperCase();
    }

}
// private renderer:Renderer,
//               private templateRef: TemplateRef<any>,
//               private viewContainer:ViewContainerRef