import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { IonGrid,IonCol,IonRow } from '@ionic/angular/standalone';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,MenuComponent,UserComponent,IonGrid,IonCol,IonRow],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-scheduler-project';
}
