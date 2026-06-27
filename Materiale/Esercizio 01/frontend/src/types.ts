export interface Articolo {
    idarticolo: number;
    titoloarticolo: string;
    dataarticolo: string;
    anteprimaarticolo: string;
    imgarticolo: string;
    nome: string;
}

export interface Autore {
    idautore: number;
    username: string;
    nome: string;
    argomenti: string;
}

export interface DettaglioArticolo {
    idarticolo: number;
    titoloarticolo: string;
    dataarticolo: string;
    testoarticolo: string;
    imgarticolo: string;
    nome: string;
}