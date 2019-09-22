/**
 * var: declara variáveis dentro e fora do escopo, podendo ser alterado seu valor
 * let: declra varíaveis dentro e fora do escopo, mas seu valor não pode ser acessado fora do escopo
 * const: declara varíaveis dentro e fora do escopo, seu valor não pode ser alterado
 */

var teste = () => {
    var mensagemForaDoEscopo = 'Var mensagem fora do escopo do if';
    if(mensagemForaDoEscopo) {
        var varMensagemDentroDoEscopo = 'Var mensagem dentro do escopo do if';
        let letMensagemDentroDoEscopo = 'Let mensagem dentro do escopo do if';
    }
    console.log(mensagemForaDoEscopo);
    console.log(varMensagemDentroDoEscopo);
    console.log(letMensagemDentroDoEscopo);
}

const alteradorConst = {};
console.log(alteradorConst);

alteradorConst.alterado = true;
console.log(alteradorConst);
