const exemploArrayLiteralDiv = document.getElementById('exemplo-array-literal');

const frutas = ['maçã', 'uva', 'banana'];

exemploArrayLiteralDiv.innerHTML = `


<h2>Exemplo de Array com Literal</h2>
<p>Array: [${frutas.join(', ')}]</p>

`;

const exemploArrayAcessoDiv = document.getElementById('exemplo-array-acesso');

const numeros = new Array(1, 2, 3, 4, 5);



const primeiroElemento = numeros[0];
const segundoElemento = numeros[1];
const terceiroElemento = numeros[2];
const quartoElemento = numeros[3];
const quintoElemento = numeros[4];

exemploArrayAcessoDiv.innerHTML += `
<h2>Exemplo de acesso aos elementos do Array</h2>

<p>Primeiro elemento: ${primeiroElemento}</p>
<p>Segundo elemento: ${segundoElemento}</p>
<p>Terceiro elemento: ${terceiroElemento}</p>
<p>Quarto elemento: ${quartoElemento}</p>
<p>Quinto elemento: ${quintoElemento}</p>

`;

const exemploArrayModificacaoDiv = document.getElementById('exemplo-array-modificado');

const cores = ['azul', 'amarelo', 'verde'];
cores[1] = 'vermelho'; 


exemploArrayModificacaoDiv.innerHTML += `
<h2>Exemplo de Modificação de Array</h2>
<p>Array cores: [${cores}]</p>
                        
`;