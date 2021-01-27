/******************* Manipulando elementos *****************/

function buttom(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar"; // Utilizando o innerHTML consiguimos atribuir um novo valor na função 
    //console.log(document.getElementById("agradecimento"));
//alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://www.amazon.com.br/?tag=msndesktopsta-20&hvadid=&hvpos=&hvexid={aceid}&hvnetw=o&hvrand=&hvpone=&hvptwo=&hvqmt=p&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=688&hvtargid=kwd-71331395852319:loc-20&ref=pd_sl_4g0yu04uek_e");
 
}
function trocar(elemento){
    //alert("Trocar texto");
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}
function functionchange(elemento){
console.log(elemento.value);
}










/******************* Funções *****************
function soma(n1,n2){
    return n1+n2;
}

var validar = 0;
function validadeIdade(idade){
    
    if(idade >= 18){
         return true;

    }else{
        return false;
    }
    
}

var idade = prompt("Qual é a sua idade");
console.log(validadeIdade(idade));

//alert(soma(5,10));
*/

/******************* DATE ******************
var d = new Date(); 

//alert(d.getMonth()+1); Para mostra o Mês
//alert(d.getMinutes()); Para mostra os Minutos
//alert(d.getHours()); Para mostrar as horas
//alert(d.getFullYear());Para mostra o ano
//alert(d.getDay()); Para mostra o dia
//alert(d.getMilliseconds()); Para mostra o Millesegundos
//alert(d.getSeconds()); Para mostra os segundos
//alert(d); Data atual
*/

/********************** Laço de repetição *******************
var count = 0;

for (count= 0; count <= 5; count++ ){
    console.log(count);
}

do{
    console.log(count);
    count++;
    }while( count <=5);

while(count <= 5){
    console.log(count);
    count++;
}*/


/* Condicional
var idade = prompt("Qual sua idade? ");
if (idade >= 18){
alert("Maior de idade");
}else{
    alert("Menor de idade ");
}
*/

/*
********************** STRING **********************
var nome = "Allan Souza";
var idade = 29;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + "Anos");
alert(idade+idade2); Dessa forma o javascript entende que são dois numeros inteiros e faz  a some

console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão", "Brasil")); 
console.log(frase.toUpperCase()); Deixa as letras maiusculas.
console.log(frase.toLowerCase()); Deixa as letras são minusculas*/

/********************** ARRAYS **********************
var lista = ["maçã","pera","laranja"];

//O Join também transforma em string e muda a virgula por um caracter, de sua escolha, no caso o traço
console.log(lista.join('-'));
//To string convert o array para uma string.
console.log(lista.toString());
// Para ver o tamanho da lista 
console.log(lista.length());
//Para trazer os elementos ao contrário na lista
console.log(lista.reverse());
/*
//para tira o ultimo elemento da lista
lista.pop();
//para addicionar um item a mais
lista.push("uva");
//Para pegar o elemento na posição 0, nesse caso foi a maçã.
console.log(lista[0]);
alert(lista[0]);*/
/********************** Dicionário *********************
//Lista de dicionário:
var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);



/*
Dicionário:
var frutas ={nome: "maçã", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);


var fruta ={nome: "maçã", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/
