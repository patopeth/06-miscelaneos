import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  @Input("appResaltado") nuevoColor: string;

  constructor(private _el: ElementRef) {
    console.log('directiva llamada');
    // _el.nativeElement.style.backgroundColor = 'red';
  }


  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.nuevoColor || 'red');
  }
  @HostListener('mouseleave') mouseOut() {
    this.resaltar(null);
  }

  private resaltar(color: string) {
    this._el.nativeElement.style.backgroundColor = color;
  }
}
