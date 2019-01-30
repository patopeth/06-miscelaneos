import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
<p [ngStyle]="{ 'font-size': tamano + 'px', 'color': color }">
Hola mundo... Esta es una etiqueta Html
</p>

<button class="btn btn-primary" (click)="tamano = tamano + 5">
<i class="fa fa-plus"></i>
</button>

<button class="btn btn-primary" (click)="tamano = tamano - 5">
<i class="fa fa-minus"></i>
</button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  color: string;
  tamano: number;

  constructor() {
    this.tamano = 10;
    this.color = 'red';
  }

  ngOnInit() {
  }

}
