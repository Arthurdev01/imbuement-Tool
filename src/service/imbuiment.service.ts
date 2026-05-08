import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImbuimentService {

  imbuimentos = [
    {
      nome: "Strike (Critical Hit)",
      tipo: "strike",
      itens: [{ nomeItem: "Protective Charm", quantidade: 20, preco: null }, { nomeItem: "Sabretooth", quantidade: 25, preco: null }, { nomeItem: "Vexclaw Talon", quantidade: 5, preco: null }]
    },
    {
      nome: "Vampirism (Life Leech)",
      tipo: "vampirism",
      itens: [{ nomeItem: "Vampire Teeth", quantidade: 25, preco: null }, { nomeItem: "Bloody Pincers", quantidade: 15, preco: null }, { nomeItem: "Piece of Dead Brain", quantidade: 5, preco: null }]
    },
    {
      nome: "Void (Mana Leech)",
      tipo: "void",
      itens: [{ nomeItem: "Rope Belts", quantidade: 25, preco: null }, { nomeItem: "Silencer Claws", quantidade: 25, preco: null }, { nomeItem: "Some Grimeleech Wings", quantidade: 5, preco: null }]
    }
  ];

  constructor() { }
}
