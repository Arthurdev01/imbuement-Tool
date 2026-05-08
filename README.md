# Imbuement Tool

Uma ferramenta em Angular para comparar o custo de imbuements entre compra direta no market e uso de Gold Tokens.

O projeto foi criado para transformar uma conta manual e repetitiva em uma interface simples, visual e rápida de usar. O usuário informa o valor do Gold Token e os preços dos itens no market; a aplicação calcula os totais, aplica a taxa e indica qual opção fica mais barata.

## 🎯 Visão Geral

O Imbuement Tool ajuda jogadores a responder uma pergunta prática:

> Vale mais a pena comprar os itens no market ou usar Gold Token?

A aplicação organiza os imbuements por categoria, mostra os itens necessários, calcula os custos automaticamente e destaca visualmente a melhor opção.

## ✨ Funcionalidades

- Seleção de imbuement por categoria:
  - Strike (Critical Hit)
  - Vampirism (Life Leech)
  - Void (Mana Leech)
- Campo para informar o valor atual do Gold Token.
- Campos mascarados para preços dos itens no market.
- Cálculo automático do custo total pelo market.
- Cálculo automático do custo total por Gold Token.
- Aplicação da taxa fixa nas duas alternativas.
- Comparação final entre Market e Gold Token.
- Indicação visual de qual alternativa é mais barata.
- Badges para quantidade de itens e tipo de compra recomendado.
- Botão para copiar o nome do item.
- Interface dark com visual pastel e componentes com efeito glassmorphism.
- Layout responsivo para telas menores.

## 🧰 Stack

- Angular 19
- TypeScript
- Angular Forms
- Ngx Mask
- Lucide Angular
- CSS puro

## 🚀 Como Rodar

Instale as dependências:

```bash
npm install
```

Inicie o servidor local:

```bash
npm start
```

Acesse no navegador:

```text
http://localhost:4200
```

## 📦 Build

Para gerar a versão de produção:

```bash
npm run build
```

Os arquivos finais serão gerados em:

```text
dist/imbuement-tool
```

## 🏗️ Estrutura Principal

```text
src/
  app/
    lista-de-imbuimentos/
      lista-de-imbuimentos.component.html
      lista-de-imbuimentos.component.css
      lista-de-imbuimentos.component.ts

    detalhe-do-imbuimento/
      detalhe-do-imbuimento.component.html
      detalhe-do-imbuimento.component.css
      detalhe-do-imbuimento.component.ts

  service/
    imbuiment.service.ts

  styles.css
```

## 🧠 Como a Aplicação Funciona

### 1. Fonte dos dados

Os dados dos imbuements ficam centralizados em `ImbuimentService`.

Cada imbuement possui:

- nome
- tipo visual
- lista de itens
- quantidade necessária de cada item
- preço informado pelo usuário

Essa estrutura permite que a tela seja renderizada dinamicamente sem repetir HTML para cada imbuement.

### 2. Seleção do imbuement

O componente `ListaDeImbuimentosComponent` exibe os botões de seleção.

Quando o usuário escolhe um imbuement, o componente salva a seleção em `imbuimentSelecionado` e envia essa informação para o componente de detalhe via `@Input`.

### 3. Cálculo dos valores

O componente `DetalheDoImbuimentoComponent` concentra a lógica de cálculo:

- `calcularTotal()` soma os preços dos itens comprados no market.
- `calcularTotalGoldToken()` calcula o custo usando Gold Tokens.
- `calcularTotalTaxa()` adiciona a taxa ao valor do market.
- `calcularTotalTaxaGold()` adiciona a taxa ao valor dos tokens.
- `qualMaisBarato()` compara os dois totais finais e retorna a melhor opção.

### 4. Feedback visual

O resultado da comparação muda visualmente:

- Market usa destaque azul.
- Gold Token usa destaque dourado.
- Quantidades e status aparecem em formato de badge.
- O imbuement selecionado recebe um estado ativo mais forte.

## 🛠️ Decisões Técnicas

### Componentização

A interface foi separada em dois componentes principais:

- `lista-de-imbuimentos`: controla a seleção e o valor do Gold Token.
- `detalhe-do-imbuimento`: mostra itens, inputs, status e resumo dos cálculos.

Essa divisão deixa o fluxo mais claro e evita que uma única tela concentre todas as responsabilidades.

### Serviço para dados

Os imbuements foram movidos para um service para manter os dados fora dos componentes visuais. Isso deixa o projeto mais fácil de expandir no futuro, por exemplo adicionando novos imbuements ou carregando dados de uma API.

### Máscara de valores

O `ngx-mask` foi usado para melhorar a experiência nos campos numéricos. Assim o usuário digita valores monetários com separadores de milhar sem precisar formatar manualmente.

### Ícones

O `lucide-angular` foi usado para o botão de copiar nome do item. Isso evita criar SVG manual e mantém o visual consistente.

### CSS

O projeto usa CSS puro com foco em:

- contraste claro em tema escuro
- cores pastel
- botões com estados visuais evidentes
- cards com efeito de vidro fosco
- responsividade com media query

## 📈 Pontos de Evolução

Algumas melhorias possíveis para próximas versões:

- Adicionar tipagem forte para `Imbuiment` e `Item`.
- Salvar preços no local storage.
- Adicionar testes unitários para os cálculos.
- Permitir cadastrar novos imbuements.
- Exibir histórico de preços.
- Melhorar a acessibilidade com labels e feedback para leitores de tela.

## 📜 Scripts Disponíveis

```bash
npm start
```

Roda o projeto em ambiente de desenvolvimento.

```bash
npm run build
```

Gera a build de produção.

```bash
npm test
```

Executa os testes configurados pelo Angular.

## ✅ Status do Projeto

Projeto em desenvolvimento, com foco em praticar:

- Angular standalone components
- binding de classes
- `@Input`
- formulários com `ngModel`
- renderização com `*ngFor`
- condicionais com `@if`
- organização visual com CSS
- lógica de cálculo no componente

## 👤 Autor

Projeto desenvolvido como estudo prático de Angular, com foco em criar uma interface útil, apresentável e fácil de evoluir.
