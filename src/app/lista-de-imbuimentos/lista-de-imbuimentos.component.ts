import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImbuimentService } from '../../service/imbuiment.service';
import { DetalheDoImbuimentoComponent } from "../detalhe-do-imbuimento/detalhe-do-imbuimento.component";
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';


@Component({
  selector: 'app-lista-de-imbuimentos',
  imports: [CommonModule, DetalheDoImbuimentoComponent, FormsModule,NgxMaskDirective],
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
