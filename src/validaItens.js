import { retornaProdutoDoCardapio, separarItemCodigoQuantidade } from "./cardapio-da-lanchonete";

function validaQuantidade(itens) {
    let quantidadeValida = true;

    for (let index = 0; index < itens.length; index++) {

        let codigoQuantidade = separarItemCodigoQuantidade(itens[index]);

        if (codigoQuantidade[1] < 1) {
            quantidadeValida = false;
            index = itens.length;
        }
    }

    return quantidadeValida;
}

function validaFormaPagamento(formaPagamento) {
    switch (formaPagamento) {
        case "dinheiro":
            return true;
        case "credito":
            return true;
        case "debito":
            return true;
        default:
            return false;
    }

}

function validaItem(itens) {

    let itemValido = true;

    for (let index = 0; index < itens.length; index++) {

        let codigoQuantidade = separarItemCodigoQuantidade(itens[index]);

        if (retornaProdutoDoCardapio(codigoQuantidade[0]).length == 0) {
            itemValido = false;
            index = itens.length;
        }
    }

    return itemValido;
}

function validaItemExtra(itens) {

    let itemExtraValido = false;

    if(itens.length == 1 && (separarItemCodigoQuantidade(itens[0])[0] != "chantily" &&  separarItemCodigoQuantidade(itens[0])[0] != "queijo"))
        return true;

    for (let index = 0; index < itens.length; index++) {

        let codigoQuantidade = separarItemCodigoQuantidade(itens[index]);

        if(codigoQuantidade[0] == "chantily"){
            for (let index = 0; index < itens.length; index++) {
                let codigoQuantidadeExtra = separarItemCodigoQuantidade(itens[index]);

                if(codigoQuantidadeExtra[0] == "cafe"){
                    itemExtraValido = true;
                }
            }
        }

        if(codigoQuantidade[0] == "queijo"){
            for (let index = 0; index < itens.length; index++) {
                let codigoQuantidadeExtra = separarItemCodigoQuantidade(itens[index]);

                if(codigoQuantidadeExtra[0] == "sanduiche"){
                    itemExtraValido = true;
                }
            }
        }

    }

    return itemExtraValido;
}

export { validaFormaPagamento, validaItem, validaItemExtra, validaQuantidade }