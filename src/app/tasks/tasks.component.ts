import { Component, Input, OnInit } from '@angular/core';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel,IonText,IonNote,IonIcon,IonList } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForward, listCircle } from 'ionicons/icons';


@Component({
  selector: 'app-tasks',
  standalone:true,
  imports:[IonAccordion,IonAccordionGroup,IonItem,IonLabel,IonText,IonNote,IonIcon,IonList],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent  implements OnInit {

  @Input({required: true}) sample!:string; 

  constructor() 
  {
    addIcons({ chevronForward, listCircle });

   }

  ngOnInit() {}

}
