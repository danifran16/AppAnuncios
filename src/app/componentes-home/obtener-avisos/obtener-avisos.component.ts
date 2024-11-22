import { Component, OnInit } from '@angular/core';
import { IonList, IonCardHeader, IonCard, IonLabel, IonItem, IonCardSubtitle, IonCardContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-obtener-avisos',
  templateUrl: './obtener-avisos.component.html',
  styleUrls: ['./obtener-avisos.component.scss'],
  standalone: true,
  imports: [ IonList, IonCard, IonLabel, IonItem]
})
export class ObtenerAvisosComponent  implements OnInit {
  ListaAnuncios:any


  constructor() { }

  ngOnInit() {

/*     this.ListaAnuncios
 */
  }

}
