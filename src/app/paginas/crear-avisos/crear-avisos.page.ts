import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons } from '@ionic/angular/standalone';
import { FormCrearAvisosComponent } from 'src/app/componentes/form-crear-avisos/form-crear-avisos.component';

@Component({
  selector: 'app-crear-avisos',
  templateUrl: './crear-avisos.page.html',
  styleUrls: ['./crear-avisos.page.scss'],
  standalone: true,
  imports: [FormCrearAvisosComponent,IonBackButton, IonButtons, RouterModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CrearAvisosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
