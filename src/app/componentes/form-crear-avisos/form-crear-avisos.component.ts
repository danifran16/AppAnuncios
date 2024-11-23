import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonCardHeader, IonCardTitle, IonInput, IonButton, IonItem, IonCard, IonImg } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { ManejoAnunciosService } from '../../servicios/manejo-anuncios.service'

@Component({
  selector: 'app-form-crear-avisos',
  templateUrl: './form-crear-avisos.component.html',
  styleUrls: ['./form-crear-avisos.component.scss'],
  standalone: true,
  imports: [IonImg, FormsModule,IonCardHeader, IonCardTitle, IonInput, IonButton, IonItem, IonCard]
})
export class FormCrearAvisosComponent  implements OnInit {
  tituloStr:string = "";
  descripcionStr:string = "";
  

  // Evento para emitir el mensaje al componente padre
  @Output() DatosDelNuevoAviso = new EventEmitter<string>();

  constructor( private manejoAnunciosService: ManejoAnunciosService ) { }
  
  ngOnInit() {}

  // funcion que tomara los datos del formulario y los pasara al componente padre (crear-avisos.page)
  crearAnuncio() {
    const datos = this.manejoAnunciosService.agregarAviso(this.tituloStr, this.descripcionStr);
  }
  
  tomarFoto() {
  throw new Error('Method not implemented.');
  }

}
