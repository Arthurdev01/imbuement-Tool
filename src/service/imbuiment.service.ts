import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImbuimentService {

imbuimentos = [

  {
    nome: "Strike (Critical Hit)",
    itens:[{ nomeItem: "Protective Charm", quantidade: 20 }, { nomeItem: "Sabretooth", quantidade: 25 }, { nomeItem: "Vexclaw Talon", quantidade: 5 }]
  },{
    nome: "Vampirism (Life Leech)",
    itens:[{ nomeItem: "Vampire Teeth", quantidade: 25 }, { nomeItem: "Bloody Pincers", quantidade: 15 }, { nomeItem: "Piece of Dead Brain", quantidade: 5 }]
  },{
    nome: "Void (Mana Leech)",
    itens:[{ nomeItem: "Rope Belts", quantidade: 25 }, { nomeItem: "Silencer Claws", quantidade: 25 }, { nomeItem: "Some Grimeleech Wings", quantidade: 5 }]
  }

];

  constructor() { }
}
