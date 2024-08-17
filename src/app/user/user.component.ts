import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IonButton,IonActionSheet, ActionSheetController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-user',
  standalone: true,
  imports:[IonButton,IonActionSheet],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent  implements OnInit {
  @Input({required:true}) avatar!:string;
  @Input({required:true}) name!:string;
  @Input({required:true}) id!:string;
  @Output() select = new EventEmitter();

  constructor(private actionSheetController: ActionSheetController) 
  { 

  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose an Option',
      buttons: [
        {
          text: 'Option 1',
          icon: 'add',
          handler: () => {
            this.select.emit(this.id);
          }
        },
        {
          text: 'Option 2',
          icon: 'arrow-forward',
          handler: () => {
            console.log('Option 2 clicked');
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }


 

  ngOnInit() {}

  logUserDetails(){
    this.select.emit(this.id);

  }

  onButtonClick() {
    this.presentActionSheet();
  }
  
  
  get userImage(){
    return "assets/users/" + this.avatar;
  }

}
