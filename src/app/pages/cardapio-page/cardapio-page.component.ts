import { Component, ElementRef, ViewChild } from '@angular/core';

import {dataFakeCategoria} from 'src/app/dataFake/itens-cardapio';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { CategoriaService } from 'src/app/service/CategoriaService';

@Component({
  selector: 'app-cardapio-page',
  templateUrl: './cardapio-page.component.html',
  styleUrls: ['./cardapio-page.component.css']
})
export class CardapioPageComponent {

  // categorias = dataFakeCategoria;

  categorias: any[] = [];

  
  constructor( private categoriaService:CategoriaService){}


  ngOnInit(): void {
    this.carregarCategorias();
   console.log(this.categorias);
   
 }

  async carregarCategorias(): Promise<void> {
    this.categoriaService.buscarCategoriasAtivas().subscribe(
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
