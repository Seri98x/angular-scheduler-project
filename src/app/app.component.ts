import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { IonGrid,IonCol,IonRow,IonActionSheet,IonContent } from '@ionic/angular/standalone';
import { DUMMY_USERS } from '../data/dummy-users';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,MenuComponent,UserComponent,TasksComponent,IonContent,CommonModule,IonGrid,IonCol,IonRow,IonActionSheet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {

  users: User[] = DUMMY_USERS;
  sample?: string;

  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  onSelectUser(id:string){
    console.log(id);
    this.sample = this.users.find( user => user.id == id)?.name;
  }

  title = 'angular-scheduler-project';
}
