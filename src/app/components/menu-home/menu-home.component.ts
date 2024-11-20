import { Component } from '@angular/core';
import { MenuBarComponent } from "../menu/menu-bar/menu-bar.component";
import { MenuLoginComponent } from "../menu/menu-login/menu-login.component";
import { MenuLogoComponent } from "../menus/menu-logo/menu-logo.component";

@Component({
  selector: 'app-menu-home',
  standalone: true,
  imports: [MenuBarComponent, MenuLoginComponent, MenuLogoComponent],
  templateUrl: './menu-home.component.html',
  styleUrl: './menu-home.component.css'
})
export class MenuHomeComponent {

}
