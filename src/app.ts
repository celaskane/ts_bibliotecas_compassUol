import "reflect-metadata";
import { plainToClass } from "../node_modules/class-transformer/index";


import { Produto } from "./produto.model";

const produtos = [
    { titulo: 'tapete', preco:59.99 },
    { titulo: 'Outro Livrinho', preco: 7.99 }
];
//const p1 = new Produto('Livrinho', 9.99);

/* const produtosCarregados = produtos.map(prod => {
    return new Produto(prod.titulo, prod.preco);
}); */


// Aparentemente, o class-transformer só funciona na versão 0.3.1
const produtosCarregados = plainToClass(Produto, produtos)

for (const prod of produtosCarregados) {
    console.log(prod.getInformacao());
}