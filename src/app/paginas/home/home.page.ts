import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonFooter, IonIcon } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { addCircleOutline } from 'ionicons/icons';
import { ObtenerAvisosComponent } from 'src/app/componentes-home/obtener-avisos/obtener-avisos.component';
import { Formulario } from '../../clases/formulario'
import { ManejoAnunciosService } from '../../servicios/manejo-anuncios.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ObtenerAvisosComponent, RouterModule, IonIcon, IonFooter, IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage  implements OnInit {
  listaAvisos:Formulario[] = [];

  constructor(
    private manejoAvisosService:ManejoAnunciosService
  ) {
    addIcons({ addCircleOutline });
  }

  ngOnInit() {
    this.listaAvisos = this.manejoAvisosService.obtenerAviso();
  }



}
