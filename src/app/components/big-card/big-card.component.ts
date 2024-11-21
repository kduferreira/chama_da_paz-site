import { Component } from '@angular/core';
import { MenuHomeComponent } from "../menu-home/menu-home.component";
import { ReservarComponent } from "../reservar/reservar.component";

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [MenuHomeComponent, ReservarComponent],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {

}
