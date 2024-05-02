import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector(".divprodutos");

function constroiCard(id,imagem, nome, preco) {
    const produto = document.createElement("div");
    produto.className = "card-produto"; 
    produto.innerHTML = `
        <img class="imgprod" src="${imagem}" alt="Imagem do produto">
        <div class="card-container--info">
            <p>${nome}</p>
            <div class="preco">
                <p>$${preco}</p>
                <img class="deletar" src="img/icons/lixeira.png" alt="lixeira" data-id="${id}">
            </div>
        </div>
    `;

    return produto;
}


async function listaProdutos() {
    const listaApi = await conectaApi.listaProdutos();
    listaApi.forEach(elemento => {
        const card = constroiCard(elemento.id, elemento.nome, elemento.preco, elemento.imagem);
        lista.appendChild(card);
        card.querySelector('.deletar').addEventListener('click', () => deletarProduto(elemento.id));
    });
}

async function deletarProduto(id) {
    try {
        await fetch(`http://localhost:3000/produtos/${id}`, {
            method: 'DELETE'
        });
        const cardParaRemover = lista.querySelector(`[data-id="${id}"]`).closest('.card-produto');
        cardParaRemover.remove();
    } catch (error) {
        console.error('Erro ao deletar o produto:', error);
    }
}

listaProdutos();
