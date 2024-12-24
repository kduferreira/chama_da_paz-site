import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-categoria-popup',
  templateUrl: './categoria-popup.component.html',
  styleUrls: ['./categoria-popup.component.css']
})
export class CategoriaPopupComponent {

  form: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CategoriaPopupComponent>
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
    
    });
  }

  submit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value); // Retorna os dados ao fechar o modal
    }
  }

}
