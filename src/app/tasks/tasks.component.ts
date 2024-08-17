import { Component, OnInit } from '@angular/core';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tasks',
  standalone:true,
  imports:[IonAccordion,IonAccordionGroup,IonItem,IonLabel],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
