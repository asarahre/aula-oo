// clases tem atributos e metodos
// pilares: "abstração", "herança", "encapsulamento", "polimorfismo"
//
console.log("Opeção pix ou transferir, titular ou pessoa");

class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  fazerSaldacao() {
    console.log("meu nome é " + this.nome);
  }
}

//////////////////////////////////////////////////////////////

class ContaBancaria {
  titular: Pessoa;
  agencia: number;
  numero: number;
  saldo: number;
  limite: number;
  tipo: string;

  constructor(
    titular: Pessoa,
    agencia: number,
    numero: number,
    tipo: string
    // limite: number,
    // saldo: number
  ) {
    this.titular = titular;
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this.limite = 0;
    this.saldo = 50;
  }

  mostarSaldo() {
    console.log("saldo atual " + this.saldo);
  }
  mostarSaldoComLimite() {
    console.log("saldo atual com limite" + this.saldo + this.limite);
  }
  depositar(valor: number) {
    if (valor > 0) {
      this.saldo += valor;
      console.log(
        "deposito de " + valor.toFixed(2) + " realizado com sucesso "
      );
    } else {
      console.log("valor invalido");
    }
  }
  enviapix(conta: ContaBancaria, valor: number): void {
    if (valor > 0) {
      this.saque(valor);
      conta.depositar(valor);
    } else {
      console.log("valor invalido");
    }
  }
  saque(valor: number) {
    const valorTotal = this.saldo + this.limite;
    if (valor <= valorTotal) {
      this.saldo -= valor;
      console.log("Ação realizado com sucesso, saldo total de " + this.saldo);
    } else {
      console.log("erro não foi possivel realizar esta ação");
    }
  }
  adicionarLimite(valor: number) {
    if (valor > 0) {
      this.limite += valor;
      console.log("limite adicionado de " + valor.toFixed(2));
    } else {
      console.log("valor invalido");
    }
  }
}

////////////////////////////////////////////////////////

class Post {
  nome: string;
  descricao: string;

  constructor(nome: string, descricao: string) {
    this.nome = nome;
    this.descricao = descricao;
  }
}

const post1 = new Post("sarah", "yuwfigk");
// post1.nome = "wuerhfweu";
// post1.descricao = "rwjghe";

const p1 = new Pessoa("sarah", 18);
const p2 = new Pessoa("deivid", 24);
const cont1 = new ContaBancaria(p1, 10, 1, "pf");
const cont2 = new ContaBancaria(p2, 10, 2, "pf");
cont2.enviapix(cont1, 30);
cont2.mostarSaldo();
cont1.mostarSaldo();
