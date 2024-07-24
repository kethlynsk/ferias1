const prompt = require("prompt-sync")();

const { criar, atualizar, remover, listar } = require("./atividades.js"); //modulos, funções qeu usarei

while (true) { //vai repetir até o usuário decidir sair
  console.log(
    `O que você deseja fazer?
    1 - Criar
    2 - Atualizar
    3 - Remover
    4 - Listar
    5 - Sair`
  );

  let opcao = Number(prompt());

  switch (opcao) { //usa mais switch quando o usuario só vai escoher uma opção
    case 1:
      criar();
      break;
    case 2:
      atualizar();
      break;
    case 3:
      remover();
      break;
    case 4:
      listar();
      break;
    case 5:
      process.exit();
      break;
    default:
      console.log("Opção inválida");
      break;
  }
}