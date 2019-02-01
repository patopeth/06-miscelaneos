import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  alerta = "alert-secondary";
  loading: boolean = false;

  propiedades = {
    danger: false
  };

  constructor() { }

  ngOnInit() {
  }

  ejecutar() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.alerta = 'alert-dark';
    }, 3000);
  }
}
