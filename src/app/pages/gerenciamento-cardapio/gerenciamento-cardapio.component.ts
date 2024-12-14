import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaPopupComponent } from 'src/app/components/popup/categoria-popup/categoria-popup.component';
import { ItemFormPopupComponent } from 'src/app/components/popup/item-form-popup/item-form-popup.component';
import { PopupService } from 'src/app/popup/popup.service.spec';
import { CategoriaService } from 'src/app/service/CategoriaService';

@Component({
  selector: 'app-gerenciamento-cardapio',
  templateUrl: './gerenciamento-cardapio.component.html',
  styleUrls: ['./gerenciamento-cardapio.component.css']
})
export class GerenciamentoCardapioComponent {

  constructor(private categoriaService:CategoriaService,  private dialog: MatDialog){}
  categorias: any[] = [];

  ngOnInit(): void {
     this.carregarCategorias();
    console.log(this.categorias);
    
  }

  async carregarCategorias(): Promise<void> {
    this.categoriaService.buscarCategorias().subscribe(
      (dados) => {
        console.log(dados);
        
        this.categorias = dados; // Preenche o array com os dados retornados da API
      },
      (erro) => {
        console.error('Erro ao buscar categorias:', erro); // Tratamento de erros
      }
    );
  }



  openPopupCategoria() {
    const dialogRef = this.dialog.open(CategoriaPopupComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Dados do Formulário:', result);
        // Aqui você pode salvar os dados em um backend ou exibi-los em outro componente.
        this.categoriaService.salvarCategoria(result).subscribe({
          next: (response) => {
            console.log('Categoria salva com sucesso:', response);
          },
          error: (err) => {
            console.error('Erro ao salvar categoria:', err);
          },
        });



        
      }
    });
  }


  openPopupItem() {
    const dialogRef = this.dialog.open(ItemFormPopupComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Dados do Formulário:', result);
        // Aqui você pode salvar os dados em um backend ou exibi-los em outro componente.
      }
    });
  }

  
}
