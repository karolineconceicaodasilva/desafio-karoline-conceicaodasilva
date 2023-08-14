import { calcularItens } from "./pagamento-da-lanchonete";
import { validaFormaPagamento, validaItem, validaItemExtra, validaQuantidade } from "./validaItens";

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        if (!validaFormaPagamento(metodoDePagamento))
            return "Forma de pagamento inválida!";

        if (itens.length == 0)
            return "Não há itens no carrinho de compra!";

        if (!validaQuantidade(itens))
            return "Quantidade inválida!";

        if (!validaItem(itens))
            return "Item inválido!";
        
        if(!validaItemExtra(itens))
            return "Item extra não pode ser pedido sem o principal";

        let total = calcularItens(metodoDePagamento, itens);

        if (typeof total === "number")
            return total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    }
}

export { CaixaDaLanchonete };
