import Produto from "./produto-da-lanchonete";

function cardapio() {

    return [
        new Produto("cafe", "Café", 3.00),
        new Produto("chantily", "Chantily (extra do Café)", 1.50),
        new Produto("suco", "Suco Natural", 6.20),
        new Produto("sanduiche", "Sanduíche", 6.50),
        new Produto("queijo", "Queijo (extra do Sanduíche)", 2.00),
        new Produto("salgado", "Salgado", 7.25),
        new Produto("combo1", "1 Suco e 1 Sanduíche", 9.50),
        new Produto("combo2", "1 Café e 1 Sanduíche", 7.50),
    ];

}

function retornaProdutoDoCardapio(codigo){

    var compararProduto = produto => produto.codigo === codigo;
    return cardapio().filter(compararProduto);
}

function separarItemCodigoQuantidade(item){
    var codigoQuantidade = item.split(",");
    return codigoQuantidade;
}

export {cardapio, retornaProdutoDoCardapio, separarItemCodigoQuantidade}