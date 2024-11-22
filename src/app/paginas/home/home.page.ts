import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonFooter, IonIcon } from '@ionic/angular/standalone';
import { AvisosPage } from '../avisos/avisos.page';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { addCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [RouterModule, IonIcon, IonFooter, IonButton, AvisosPage, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor(
  ) {
    addIcons({ addCircleOutline });
  }}
