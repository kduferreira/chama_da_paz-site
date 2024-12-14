import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaPopupComponent } from 'src/app/components/popup/categoria-popup/categoria-popup.component';
import { ItemFormPopupComponent } from 'src/app/components/popup/item-form-popup/item-form-popup.component';
import { CategoriaService } from 'src/app/service/CategoriaService';
import { ItemService } from 'src/app/service/itemServicec';

@Component({
  selector: 'app-gerenciamento-cardapio',
  templateUrl: './gerenciamento-cardapio.component.html',
  styleUrls: ['./gerenciamento-cardapio.component.css']
})
export class GerenciamentoCardapioComponent {

  constructor(private itemService:ItemService, private categoriaService:CategoriaService,  private dialog: MatDialog){}
  idCategoria:number = 0;
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
            window.location.reload();
          },
          error: (err) => {
            console.error('Erro ao salvar categoria:', err);
          },
        });



        
      }
    });
  }


  openPopupItem(idCategoria:number) {

    console.log(idCategoria);
    
    const dialogRef = this.dialog.open(ItemFormPopupComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      //add id de categoria selecionada ao resultado
      result.id_categoria = idCategoria
      if (result) {
        
          // Aqui você pode salvar os dados em um backend ou exibi-los em outro componente.
          this.itemService.salvarItem(result).subscribe({

            next: (response) => {
              console.log('Item salvo com sucesso:', response);
              window.location.reload();
            },
            error: (err) => {
              console.error('Erro ao salvar categoria:', err);
            },
          });
  
        
      }
    });
  }

  
  recarregarPagina() {
    window.location.reload();
  }


}
