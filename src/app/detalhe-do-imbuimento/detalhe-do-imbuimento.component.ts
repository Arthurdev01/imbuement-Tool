import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-detalhe-do-imbuimento',
  imports: [CommonModule,FormsModule,NgxMaskDirective,LucideAngularModule],
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

quantosComToken(){
let contador = 0
for (const item of this.imbuimentSelecionado.itens) {
    if ( this.maisBarato(item) === "Comprar pelo Market" ) {
        break;
    }else{
      contador++
    }
}
return contador
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

qualMaisBarato(){
 const diferenca = Math.abs(this.calcularTotalTaxaGold() - this.calcularTotalTaxa());

 if(this.calcularTotalTaxaGold() < this.calcularTotalTaxa()){
   return { melhor: "Gold Token", diferenca: diferenca }
 }else{
return { melhor: "Market", diferenca: diferenca }
 }
}

goldTokenMaisBarato(){
  return this.qualMaisBarato().melhor === "Gold Token";
}

marketMaisBarato(){
  return this.qualMaisBarato().melhor === "Market";
}

async copiarNome(nome: string) {
  try {
    await navigator.clipboard.writeText(nome);
    console.log('Texto copiado com sucesso!');
  } catch (err) {
    console.error('Falha ao copiar: ', err);
  }
}

}
