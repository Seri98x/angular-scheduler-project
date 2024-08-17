import { Component, OnInit } from '@angular/core';
import { IonMenu,IonHeader,IonToolbar,IonContent,IonTitle,IonButtons,IonMenuButton } from '@ionic/angular/standalone';


@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  imports: [IonMenu,IonHeader,IonToolbar,IonContent,IonTitle,IonButtons,IonMenuButton],
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
