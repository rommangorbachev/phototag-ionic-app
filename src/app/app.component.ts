import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane
} from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {cameraOutline, globe} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Take a photo', url: '/capture', icon: 'camera-outline' },
    { title: 'View gallery', url: '/view', icon: 'globe' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
    addIcons({ cameraOutline, globe });
  }
}
