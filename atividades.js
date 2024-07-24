const prompt = require("prompt-sync")();

const atividades = [];

const modelo = () => {    // uma função
  let atividade = {       // com um objeto
    dia: undefined,       // com a data que o usuario colocar
    descricao: [],        // e um array para a descrição das atividades
  };

  atividade.dia = prompt("Qual dia? ");        // coloca a data na variavel dia do objeto atividade
  
  while (true) {  //enquanto tiver atividade para adcm vai rodar esse programa
    let resposta = prompt("O que fez nesse dia? ");

    if (resposta == "acabou") break;

    atividade.descricao.push(resposta);       //variavel descricao, do objeto atividade, recebe a resposta do usuarioa
  }

  return atividade;                           //retorna para o objeto
};


const criar = () => {
    let atividade = modelo();
  
    atividades.push(atividade);              // o array atividades recebe o objeto atividade
  
    console.log("Atividade criada");
  };

  const listar = () => {
    atividades.forEach((atividade, indice) => {
      console.log(`${indice + 1}. ${atividade.dia}: `);
      atividade.descricao.forEach((descricao) => console.log(`- ${descricao}`));
    });
  };

  const atualizar = () => {
    listar();
  
    let indice = prompt("Qual indice deseja atualizar? ");
  
    let atividade = modelo();
  
    atividades[--indice] = atividade;
  
    console.log("Atualizado");
  };
  
  const remover = () => {
    listar();
  
    let indice = prompt("Qual indice sera removido? ");
  
    atividades.splice(--indice, 1);
  
    console.log("Removido");
  };
  
  module.exports = {
    criar,
    atualizar,
    remover,
    listar,
  };