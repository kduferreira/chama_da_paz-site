import { Component } from '@angular/core';
import { catchError } from 'rxjs';
import { CategoriaService } from 'src/app/service/CategoriaService';


@Component({
  selector: 'app-gerenciamento-cardapio',
  templateUrl: './gerenciamento-cardapio.component.html',
  styleUrls: ['./gerenciamento-cardapio.component.css']
})
export class GerenciamentoCardapioComponent {

  constructor(private categoriaService:CategoriaService){}
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
}
