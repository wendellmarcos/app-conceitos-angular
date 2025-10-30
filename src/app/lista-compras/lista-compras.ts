import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemlista';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.scss'
})
export class ListaCompras {
  item: string = '';

  //lista é o nome da variável que guarda a lista de itens
  // ItemLista[] indica que é um array de objetos do tipo ItemLista
  lista: ItemLista[] = [];


  adicionarItem(){
    let novoItem = new ItemLista();
    //id incremental
    novoItem.id = this.lista.length + 1;
    //nome do item é o valor digitado no input
    novoItem.nome = this.item;

    novoItem.comprado = true;

    //adiciona o novo item à lista
    this.lista.push(novoItem);

    // no fim recebe o valor vazio para limpar o input
    this.item = '';

    console.log(this.lista);




  }
}
