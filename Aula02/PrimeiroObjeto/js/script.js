const produtos = {
   produto1: {
       nome: "Camiseta de Algodão",
       preco: 59.99,
       disponivel: true,
   },
  produto2:{

         nome: "Calça Jeans Slim fit",
         preco: 89.99,
         disponivel: false,

  },

    produto3: {
        nome: "Tênis Esportivo nike",
        preco: 400.00,
        disponivel: true,
    }


};

//Vamos pegar a div que vamosexibir os produos


const listaProdutosDiv = document.getElementById('lista-produtos');

//Vamos iterear os elements do objeto produtos

for (let key in produtos) {
//vamos ler as propriedades de cada produto
    if(produtos.hasOwnProperty(key)) {
        const produto = produtos[key];

        //Vamos criar os elementos HTML para exibir as informaes de cada produto

        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');

        //Vamos criar o elemento para exibr o nome 
        const nomeH3 = document.createElement('h1');
        
         //Vamos criar o elemento para exibr o nome do produto
        nomeH3.textContent = produto.nome;


        //Vamos criar o elemento <p> para exibir o preço do produto formatado para 2 casas decimais
        const precoP = document.createElement('p');

        //Vamos criar o elemento para exibir o preço do produto
        precoP.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;

        //Vamos criar o elemento <p> para exibir a disponibilidade do produto
        const disponibilidadeP = document.createElement('p');       
              
        //Vamos criar o elemento para exibir a disponibilidade do produto   
        const spanDisponibilidade = document.createElement('span');
        spanDisponibilidade.textContent = produto.disponivel ? 'Disponível' : 'Indisponível';
        spanDisponibilidade.classList.add(produto.disponivel ? 'disponivel' : 'indisponivel');
        disponibilidadeP.appendChild(spanDisponibilidade);

        //Vamos adicionar os elementos criados na div do produto
        produtoDiv.appendChild(nomeH3);
        produtoDiv.appendChild(precoP);
        produtoDiv.appendChild(disponibilidadeP);

        //Vamos adicionar a div do produto na lista de produtos
        listaProdutosDiv.appendChild(produtoDiv);
    }

}