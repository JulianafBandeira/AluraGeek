import { conectaApi } from "./conectaApi.js"

const formulario = document.querySelector("[data-formulario]")

async function criarProduto(evento) {
    evento.preventDefault()
    const imagem = document.querySelector("[data-imagem]").value
    const nome = document.querySelector("[data-nome]").value
    const preco = document.querySelector("[data-valor]").value

    await conectaApi.criaProduto(imagem, nome, preco)

}

formulario.addEventListener("submit", evento => criarProduto(evento))