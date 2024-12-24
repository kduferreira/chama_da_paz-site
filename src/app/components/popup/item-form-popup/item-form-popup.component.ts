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

  selectedFile: File | null = null;
  
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ItemFormPopupComponent>
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      preco: [null, [Validators.required, Validators.min(0)]],
      imagem:[null, Validators.required]
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  submit() {
    if (this.form.valid) {
     
      this.form.value.file = this.selectedFile

      console.log(this.form.value);
      
      
      this.dialogRef.close(this.form.value); // Retorna os dados ao fechar o modal
    }
  }
}
