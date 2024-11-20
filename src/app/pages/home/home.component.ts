import { Component } from '@angular/core';
import { MenuHomeComponent } from "../../components/menu-home/menu-home.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { MenuInfoComponent } from "../../components/menu-info/menu-info.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BigCardComponent, MenuInfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
