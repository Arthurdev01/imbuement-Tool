import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImbuimentService } from '../../service/imbuiment.service';
import { FormsModule } from '@angular/forms';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-detalhe-do-imbuimento',
  imports: [CommonModule,FormsModule],
  templateUrl: './detalhe-do-imbuimento.component.html',
  styleUrl: './detalhe-do-imbuimento.component.css'
})
export class DetalheDoImbuimentoComponent {
@Input() imbuimentSelecionado: any = null;
@Input() goldTokenValor: any = null;

maisBarato(item: any){
  const custoMarket = (item.preco ?? 0) * item.quantidade;
  const custoToken = 2 * (this.goldTokenValor ?? 0);
  const resultado = (custoMarket > custoToken) ? "Comprar Gold Token" : "Comprar pelo Market";
  return resultado
}

calcularTotal(){
 return this.imbuimentSelecionado?.itens.reduce((acumulador: number, item: any) => acumulador + ((item.preco ?? 0) * item.quantidade),0);
}
calcularTotalTaxa(){
 return this.calcularTotal() +250000;
}

calcularTotalGoldToken(){
  return (this.imbuimentSelecionado?.itens?.length ?? 0) * 2 * (this.goldTokenValor ?? 0);
}

calcularTotalTaxaGold(){
 return this.calcularTotalGoldToken() +250000;
}

}
