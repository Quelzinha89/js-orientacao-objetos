import {Cliente} from "./cliente.js"
import {contaCorrente} from "./contaCorrente.js"
import {ContaPoupança} from "./contaPoupança.js";
import {ContaSalario} from "./contaSalario.js"
import {Conta} from "./conta.js";

const cliente1 = new Cliente("Raquel", 22256996633);

// (.)diferenciar o atributo objeto de variavel 
const contaCorrenteRicardo = new contaCorrente(0, cliente1, 1002);
const contaPoupanca =  new ContaPoupança (50,cliente1, 1001);
const contaSalario = new ContaSalario()

contaCorrenteRicardo.depositar(500); 
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);