import { Component } from '@angular/core';
import { MenuLocalComponent } from "../menus/menu-local/menu-local.component";
import { MenuSocialComponent } from "../menus/menu-social/menu-social.component";

@Component({
  selector: 'app-menu-info',
  standalone: true,
  imports: [MenuLocalComponent, MenuSocialComponent],
  templateUrl: './menu-info.component.html',
  styleUrl: './menu-info.component.css'
})
export class MenuInfoComponent {

}
