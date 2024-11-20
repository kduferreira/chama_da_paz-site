import { Component } from '@angular/core';
import { MenuHomeComponent } from "../menu-home/menu-home.component";

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [MenuHomeComponent],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {

}
