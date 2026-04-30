import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaDeImbuimentosComponent } from './lista-de-imbuimentos/lista-de-imbuimentos.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule,ListaDeImbuimentosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'imbuement-Tool';
}
