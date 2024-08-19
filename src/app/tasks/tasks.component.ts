import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel,IonText,IonNote,IonIcon,IonList,IonInfiniteScroll,IonInfiniteScrollContent, InfiniteScrollCustomEvent,IonContent} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForward, listCircle } from 'ionicons/icons';
import { EllipsisPipe } from '../pipes/ellipsis.pipe';



@Component({
  selector: 'app-tasks',
  standalone:true,
  imports:[IonAccordion,IonAccordionGroup,IonItem,IonLabel,IonText,IonNote,IonIcon,IonList,IonInfiniteScroll,IonInfiniteScrollContent,IonContent,EllipsisPipe,CommonModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent  implements OnInit {

  @Input({required: true}) sample!:string; 
  items:any[] = [];

  constructor() 
  {
    addIcons({ chevronForward, listCircle });

   }

  ngOnInit() 
  {
    this.generateItems();

  }

  testClick(){
    console.log("tae");
  }


  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 4; i++) {
      this.items.push(`Item  ${count + i}`);
    }
  }

  onIonInfinite(ev: any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 2000);
  }

}
