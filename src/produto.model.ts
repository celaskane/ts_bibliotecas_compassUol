import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class Produto {
    @IsNotEmpty()
    titulo: string;
    @IsNumber()
    @IsPositive()
    preco: number;

    constructor(t: string, p: number) {
        this.titulo = t;
        this.preco = p;
    }

    getInformacao() {
        return [this.titulo, `$${this.preco}`];
    }
}