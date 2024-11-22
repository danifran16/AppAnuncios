import { Component, OnInit } from '@angular/core';
import { IonCardHeader, IonCardTitle, IonInput, IonButton, IonItem, IonCard, IonImg } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form-crear-avisos',
  templateUrl: './form-crear-avisos.component.html',
  styleUrls: ['./form-crear-avisos.component.scss'],
  standalone: true,
  imports: [IonImg, FormsModule,IonCardHeader, IonCardTitle, IonInput, IonButton, IonItem, IonCard]
})
export class FormCrearAvisosComponent  implements OnInit {
  formStr: String = "";
  descStr: any;
  
  constructor() { }
  
  ngOnInit() {}
  
  crearAnuncio() {
    throw new Error('Method not implemented.');
  }
  
  tomarFoto() {
  throw new Error('Method not implemented.');
  }

}
