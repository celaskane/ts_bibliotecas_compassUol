export class Produto {
    titulo: string;
    preco: number;

    constructor(t: string, p: number) {
        this.titulo = t;
        this.preco = p;
    }

    getInformacao() {
        return [this.titulo, `$${this.preco}`];
    }
}