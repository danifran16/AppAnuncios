import { Injectable } from '@angular/core';
import { Formulario } from '../clases/formulario';

@Injectable({
  providedIn: 'root'
})
export class ManejoAnunciosService {

  // Lista privada que contendra los datos que sean ingresados al formulario
  private _form:Formulario[] = [
  ]

  constructor() { }

  agregarAviso(titulo:string, descripcion:string, foto:string, fecha:string) {
    const nuevoAviso = new Formulario(titulo,descripcion,foto,fecha)
    this._form.push(nuevoAviso);
  }

  obtenerAviso():Formulario[]{
    return this._form
  }
}
