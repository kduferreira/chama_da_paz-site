import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { CategoriaPopupComponent } from '../components/popup/categoria-popup/categoria-popup.component';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private dialog: MatDialog) {}

  openPopup() {
    this.dialog.open(CategoriaPopupComponent, {
      width: '400px',
      height: '200px',
      panelClass: 'custom-dialog-container'
    });
  }
}
