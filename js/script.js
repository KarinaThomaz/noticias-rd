const API_KEY = "f74335d9fed94b159b39471d0234cb1b";

let noticias = document.querySelector("#noticias");

let btnCarregaNoticia = document.querySelector("#carregaNoticia");

let config = {
    method: "GET"
}

function mostrarNaTela(listaNoticias) {
    listaNoticias.forEach(blocoNoticias => {
        let cardNoticia = `
            <div class="card col-md-4" style="width:400px">
                <img class="card-img-top" src="${blocoNoticias.urlToImage}" alt="Imagem da notícia"
                    title="Imagem da notícia" style="width:100%">
                <div class="card-body">
                    <h4 class="card-title">${blocoNoticias.title}</h4>
                    <p class="card-text text-justify">${blocoNoticias.description}</p>
                    <a href="${blocoNoticias.url}" target ="_blank" class="btn btn-primary">Ver mais</a>
                </div>
            </div>`
        noticias.insertAdjacentHTML('beforeend', cardNoticia);
    })

}

btnCarregaNoticia.onclick = () => {
    //fetch e' o responsavel por realizar a solicitacao e devolver uma resposta
    //then define o que sera' feito apos finalizar a requisicao
    let resposta = fetch('http://newsapi.org/v2/top-headlines?country=br&apiKey=' + API_KEY, config)
        .then((resposta) => {
            return resposta.json();//aqui extraimos um json da resposta, o json retorna uma nova promessa
        })
        .then((json) => {
            console.log(json.articles[0]);

            mostrarNaTela(json.articles);
        })

}

