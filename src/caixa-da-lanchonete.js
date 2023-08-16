class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const cardapio = [
            { codigo: "cafe", valor: 300 },
            { codigo: "chantily", valor: 150 },
            { codigo: "suco", valor: 620 },
            { codigo: "sanduiche", valor: 650 },
            { codigo: "queijo", valor: 200 },
            { codigo: "salgado", valor: 725 },
            { codigo: "combo1", valor: 950 },
            { codigo: "combo2", valor: 750 },
        ];

        let carrinhoDeCompras = [];
        let validacaoCodigos = true;

        for (let cadaPedido of itens) {
            let arrayCadaPedido = cadaPedido.split(",");
            validacaoCodigos = cardapio.some((produto) => {
                return produto.codigo === arrayCadaPedido[0];
            });
            if (validacaoCodigos === true) {
                let valorUnit = cardapio.find((produto) => {
                    return produto.codigo === arrayCadaPedido[0];
                })
                carrinhoDeCompras.push({
                    codigo: arrayCadaPedido[0],
                    quantidade: Number(arrayCadaPedido[1]),
                    valorUnit: valorUnit.valor,
                });
            } else {
                break;
            }
        };
        let validacaoQuantidade = carrinhoDeCompras.some((produto) => {
            return produto.quantidade === 0;
        });
        let validacaoSanduiche = carrinhoDeCompras.some((produto) => {
            return produto.codigo === "sanduiche";
        });
        let validacaoQueijo = carrinhoDeCompras.some((produto) => {
            return produto.codigo === "queijo";
        });
        let validacaoCafe = carrinhoDeCompras.some((produto) => {
            return produto.codigo === "cafe";
        });
        let validacaoChantily = carrinhoDeCompras.some((produto) => {
            return produto.codigo === "chantily";
        });

        let validacaoSanduicheComQueijo = true;
        if ((validacaoQueijo) && (!validacaoSanduiche)) {
            validacaoSanduicheComQueijo = false;
        } else {
            validacaoSanduicheComQueijo = true;
        };

        let validacaoCafeComChantily = true;
        if ((validacaoChantily) && (!validacaoCafe)) {
            validacaoCafeComChantily = false;
        } else {
            validacaoCafeComChantily = true;
        };

        let desconto = 0;
        if (metodoDePagamento === "dinheiro") {
            desconto = 0.95;
        } else if (metodoDePagamento === "debito") {
            desconto = 1;
        } else if (metodoDePagamento === "credito") {
            desconto = 1.03;
        } else {
            desconto = -1;
        };

        let totalAPagar = 0;
        let valorAPagar = 0;
        for (let cadaItem of carrinhoDeCompras) {
            valorAPagar += (cadaItem.valorUnit) * (cadaItem.quantidade);
        };
        totalAPagar = (valorAPagar * desconto) / 100;

        let resultado = 0;
        if (validacaoCodigos === false) {
            resultado = "Item inválido!";
        } else if (validacaoQuantidade === true) {
            resultado = "Quantidade inválida!";
        } else if (carrinhoDeCompras.length === 0) {
            resultado = "Não há itens no carrinho de compra!";
        } else if (validacaoCafeComChantily === false || validacaoSanduicheComQueijo === false) {
            resultado = "Item extra não pode ser pedido sem o principal";
        } else if (totalAPagar < 0) {
            resultado = "Forma de pagamento inválida!";
        } else {
            resultado = `R$ ${totalAPagar.toFixed(2)}`;
            resultado = resultado.replace(".", ",");
        };

        return resultado;
    };
};

export { CaixaDaLanchonete };
