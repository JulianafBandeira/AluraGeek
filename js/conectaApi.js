async function listaProdutos() {
    const conexao = await fetch('http://localhost:3000/produtos')
    let conexaoFormatada = await conexao.json()
    return conexaoFormatada

}

async function criaProduto(nome, preco, imagem) {
    const conexao = await fetch('http://localhost:3000/produtos', {
        method: "POST",
        headers: {
            "Content-type": "aplication/json"
        },
        body: JSON.stringify({
            imagem: imagem,
            nome: nome,
            preco: preco
        })
    })
    const conexaoFormatada = await conexao.json()
    return conexaoFormatada
}



export const conectaApi = {
    listaProdutos,
    criaProduto,
}