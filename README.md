# CAIXA DA LANCHONETE

## Solução do Desafio - Implementação do Caixa da Lanchonete
Este repositório é referente à resolução do desafio de desenvolvimento de um caixa automático para lanchonete com cardápio pré-definido, proposto pela DB. O objetivo é a estruturação de uma comanda que especifique os itens consumidos de acordo com condições de consumo e retornando a soma total a ser paga em reais, com aplicação ou não de desconto.

Serão encontrados dois arquivos principais na pasta source (src):<br>
- **caixa-da-lanchonete.js** : Este arquivo contempla a resolução proposta com a estruturação de um cardápio, de modelo de carrinho de compras através do método `calcularValorDaCompra`, que recebe os parâmetros `metodoDePagamento` e `itens`, inserido na classe `CaixaDaLanchonete`. Este modelo foi fornecido pelo próprio desafio, por isso todas as soluções estão comprimidas neste mesmo arquivo.<br>
- **caixa-da-lanchonete-test.js** : Neste arquivo constam os testes com cenários pré-estabelecidos para verificação do funcionamento do código proposto.

### Instalando e colocando em funcionamento no seu PC
1. Instalar o [Node](https://nodejs.org/en/)
2. Instalar dependencias do projeto com o seguinte comando:
```bash
npm install
```

### Validações e Testes
Junto com a estrutura básica você está recebendo alguns cenários de testes para auxiliar na validação da sua solução. Recomendamos que você crie mais casos de teste para aumentar a confiabilidade da sua solução.
Para testar sua solução com os cenários já criados, basta rodar o seguinte comando:
```bash
npm test
```

Para saber mais consulte a [Documentação do Jest](https://jestjs.io/pt-BR/docs/getting-started).

### Inputs
O método `calcularValorDaCompra` recebe dois parâmetros, `formaDePagamento` e `itens`, sendo o primeiro uma string com os possíveis valores válidos: `debito`, `credito` e `dinheiro`. O segundo parâmetro contém uma array dos itens que serão comprados. Cada item é uma string contendo o código do item e a quantidade do mesmo separados por uma vírgula.
EXEMPLO:
```js
['cafe,1','chantily,1']
```

### Outputs
O retorno do método `calcularValorDaCompra` deve ser sempre uma string e conteúdo dela pode ser ou o valor total da compra ou uma mensagem de erro conforme as regras descritas anteriormente. O valor da compra deve ser formatado com `R$` e decimais separados por vírgula.

EXEMPLO:
```js
// exemplo de saída do valor da compra
"R$ 6,00"

// exemplo de saída de erro
"Forma de pagamento inválida!"
```

### EXEMPLOS

EXEMPLO 1: Compra de chantily sem café.
```js
new CaixaDaLanchonete()
  .calcularValorDaCompra('debito', ['chantily,1']);
```
O resultado esperado deve ser:
```
"Item extra não pode ser pedido sem o principal"
```

<br/>

EXEMPLO 2: Compra de café com chantily.
```js
new CaixaDaLanchonete()
  .calcularValorDaCompra('debito', ['cafe,1','chantily,1']);
```
O resultado esperado deve ser:
```
"R$ 4,50"
```

<br/>

EXEMPLO 3: Compra de combo e dois cafés
```js
new CaixaDaLanchonete()
  .calcularValorDaCompra('credito', ['combo1,1','cafe,2']);
```
O resultado esperado deve ser:
```
"R$ 15,96"
```
