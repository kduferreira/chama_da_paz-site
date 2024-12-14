import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-item-form-popup',
  templateUrl: './item-form-popup.component.html',
  styleUrls: ['./item-form-popup.component.css']
})
export class ItemFormPopupComponent {
  form: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ItemFormPopupComponent>
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      preco: [null, [Validators.required, Validators.min(0)]],
    });
  }

  submit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value); // Retorna os dados ao fechar o modal
    }
  }
}
