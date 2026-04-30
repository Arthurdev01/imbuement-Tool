import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImbuimentService } from '../../service/imbuiment.service';

@Component({
  selector: 'app-detalhe-do-imbuimento',
  imports: [CommonModule],
  templateUrl: './detalhe-do-imbuimento.component.html',
  styleUrl: './detalhe-do-imbuimento.component.css'
})
export class DetalheDoImbuimentoComponent {
@Input() imbuimentSelecionado: any = null;
}
