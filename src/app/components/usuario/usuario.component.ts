import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: []
})
export class UsuarioComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log("hola");
    this._activatedRoute.params.subscribe(params => {
      console.log("Ruta Padre");
      console.log(params["id"]);
    });
  }

}
