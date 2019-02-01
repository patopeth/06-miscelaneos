import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log("hola");
    this._activatedRoute.parent.params.subscribe(params => {
      console.log("Ruta hija usuario nuevo");
      console.log(params["id"]);
    });
  }

}
