import { Conta } from './conta.js';
// #campoprivado _ campo como sinal (_) privado n deve ser mexido
export class contaCorrente extends Conta{
    static numeroDecontas = 0;
//set atribui os valores
    constructor(cliente,agencia){
        super(0,cliente,agencia);
        contaCorrente.numeroDecontas++;
    }

    
    // sobrescrevendo o comportamento de sacar,
    sacar(valor) {
        let taxa = 1
        return this._sacar(valor, taxa);
       
    }
}

// O super é uma palavra especial que vai chamar o construtor da classe pai. Não é sempre que ele vai chamar o construtor, na verdade, 
// ele depende do método em que ele está dentro.
    





 

