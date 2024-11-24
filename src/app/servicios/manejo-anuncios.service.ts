import { Injectable } from '@angular/core';
import { Formulario } from '../clases/formulario';

@Injectable({
  providedIn: 'root'
})
export class ManejoAnunciosService {

  // Lista privada que contendra los datos que sean ingresados al formulario
  private _form:Formulario[] = [
    // new Formulario("t1", "d2")//se setea para probar, despues s eborra para que sea dinamica
  ]

  constructor() { }

  agregarAviso(titulo:string, descripcion:string, foto:string) {
    const nuevoAviso = new Formulario(titulo,descripcion,foto)
    this._form.push(nuevoAviso);
  }

  obtenerAviso():Formulario[]{
    return this._form
  }


}
