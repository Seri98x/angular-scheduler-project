import { Component, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-user',
  standalone: true,
  imports:[IonButton],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent  implements OnInit {

  public name?:string;
  constructor() 
  { 
    this.name = "testing lang";
  }

  ngOnInit() {}

  logUserDetails(){
    console.log(this.name);

  }

}
