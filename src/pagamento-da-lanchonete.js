import { separarItemCodigoQuantidade, retornaProdutoDoCardapio } from "./cardapio-da-lanchonete";

function calcularItem(valor, quantidade) {
    var soma = valor * parseInt(quantidade);
    return soma;
}

function calcularItens(metodoDePagamento, itens) {
    
    var total = 0;

    itens.forEach(item => {
        let codigoQuantidade = separarItemCodigoQuantidade(item);
        let quantidade = codigoQuantidade[1];
        let produto = retornaProdutoDoCardapio(codigoQuantidade[0]);

        total = total + calcularItem(produto[0].valor, quantidade);

    });

    switch (metodoDePagamento) {
        case "dinheiro": 
            total =  total - (total * 5) / 100; 
            break;
        case "credito": 
            total =  total + (total * 3) / 100;
            break;
       
        default: break;
    }

    return total;
}

export { calcularItens }