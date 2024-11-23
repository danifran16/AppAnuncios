import { Component,OnInit, Input } from '@angular/core';
import { IonList, IonCard, IonLabel, IonItem } from "@ionic/angular/standalone";
import { Formulario } from '../../clases/formulario'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-obtener-avisos',
  templateUrl: './obtener-avisos.component.html',
  styleUrls: ['./obtener-avisos.component.scss'],
  standalone: true,
  imports: [ CommonModule, IonList, IonCard, IonLabel, IonItem]
})
export class ObtenerAvisosComponent implements OnInit {

  //Aqui el componente hijo recibe los datos que le envio el formulario padre, los cuales los obtuvo a traves del Servicio
  @Input() anuncios:Formulario[] = [];

  constructor() { }

  ngOnInit() {
  }

}
