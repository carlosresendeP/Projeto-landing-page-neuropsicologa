const articleGrid = document.querySelector('.article-grid');
const card = document.querySelector('.article-card')


let listArticles= ''



function showArticles(articles){
    listArticles = ''

    articles.forEach((article) => {

        listArticles +=`
            <div class="article-card">
                <img src="${article.img}" alt="imagem de uma criança">

                <h3>${article.title}</h3>

                <a href="${article.link}">Ler</a>
            </div>
    `


    });

    articleGrid .innerHTML = listArticles
    
    
}


document.addEventListener("DOMContentLoaded", ()=> {
    showArticles(articlesCards);
});

