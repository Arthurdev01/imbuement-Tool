import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImbuimentService } from '../../service/imbuiment.service';
import { DetalheDoImbuimentoComponent } from "../detalhe-do-imbuimento/detalhe-do-imbuimento.component";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-lista-de-imbuimentos',
  imports: [CommonModule, NgFor, DetalheDoImbuimentoComponent, FormsModule],
  templateUrl: './lista-de-imbuimentos.component.html',
  styleUrl: './lista-de-imbuimentos.component.css'
})
export class ListaDeImbuimentosComponent {

imbuimentSelecionado: any = null;
goldTokenValor: any = null;

constructor(public imbuiment: ImbuimentService){
this.imbuiment.imbuimentos
}

detalhes(imbuimentSelecionado: any = null) {
 this.imbuimentSelecionado = imbuimentSelecionado
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



