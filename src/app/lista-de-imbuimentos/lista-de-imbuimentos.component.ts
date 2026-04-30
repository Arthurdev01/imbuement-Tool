import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ImbuimentService } from '../imbuiment.service';

@Component({
  selector: 'app-lista-de-imbuimentos',
  imports: [CommonModule,NgFor],
  templateUrl: './lista-de-imbuimentos.component.html',
  styleUrl: './lista-de-imbuimentos.component.css'
})
export class ListaDeImbuimentosComponent {

constructor(public imbuiment: ImbuimentService){
this.imbuiment.imbuimentos
}

detalhes() {
    console.log('Button clicked!');
  }

}
interface item{
  nome:string;
  quantidade: number
}
interface  imbuimento{
nome: string;
itens: item[];
}



