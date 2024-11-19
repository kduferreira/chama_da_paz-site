import { Component } from '@angular/core';
import { MenuBarComponent } from "../menu/menu-bar/menu-bar.component";
import { MenuLoginComponent } from "../menu/menu-login/menu-login.component";

@Component({
  selector: 'app-menu-home',
  standalone: true,
  imports: [MenuBarComponent, MenuLoginComponent],
  templateUrl: './menu-home.component.html',
  styleUrl: './menu-home.component.css'
})
export class MenuHomeComponent {

}
