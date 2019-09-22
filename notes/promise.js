// Criar uma função que irá retornar uma promessa

const prom = () => {
    /**
     * Retornar uma promessa passando uma função com dois argumentos
     * Resolve: Ao executar o resolve diz que a função completou com sucesso
     * Reject: Ao executar o reject diz que a função teve problemas, algo saiu errado
     */
    return new Promise((resolve, reject) => {
        // se o número randômico for maior que 0 e 5 configure para true
        if(Math.ceil(Math.random() * 10) > 5){
            setTimeout(() => { resolve(true) }, 3000);
        }else{
            setTimeout(() => { resolve(false) }, 3000);
        };
    });
};
console.log('load...');
/**
 * Executar a promise
 */
prom().then(resolve => {
    console.log('Promise deu certo', resolve);
}).catch(reject => {
    console.log('Promise deu errado', resolve);
})