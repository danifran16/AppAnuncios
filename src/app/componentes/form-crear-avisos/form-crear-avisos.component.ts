import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonCardHeader, IonCardTitle, IonInput, IonButton, IonItem, IonCard, IonImg } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { ManejoAnunciosService } from '../../servicios/manejo-anuncios.service'
import { Camera, CameraResultType } from '@capacitor/camera';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-crear-avisos',
  templateUrl: './form-crear-avisos.component.html',
  styleUrls: ['./form-crear-avisos.component.scss'],
  standalone: true,
  imports: [CommonModule, IonImg, FormsModule,IonCardHeader, IonCardTitle, IonInput, IonButton, IonItem, IonCard]
})
export class FormCrearAvisosComponent  implements OnInit {
  tituloStr:string = "";
  descripcionStr:string = "";
  fotoAnuncioStr:string = "";
  fechaCreacionAnuncioStr:string = new Date().toLocaleString();


  // Evento para emitir el mensaje al componente padre
  @Output() DatosDelNuevoAviso = new EventEmitter<string>();

  constructor( private manejoAnunciosService: ManejoAnunciosService ) { }
  
  ngOnInit() {}

  // funcion que tomara los datos del formulario y los pasara al componente padre (crear-avisos.page)
  crearAnuncio() {
    this.manejoAnunciosService.agregarAviso(this.tituloStr, this.descripcionStr, this.fotoAnuncioStr, this.fechaCreacionAnuncioStr);
  
    this.tituloStr = "";
    this.descripcionStr = "";
    this.fotoAnuncioStr = "";
    this.fechaCreacionAnuncioStr;
  }
  

async tomarFotoAviso() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64
    })
    
    if (image.base64String != null || image.base64String != undefined) {
      this.fotoAnuncioStr = image.base64String
    }
  }

}
