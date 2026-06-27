export interface Articolo {
  idarticolo: number
  titoloarticolo: string
  dataarticolo: string
  anteprimaarticolo: string
  imgarticolo: string
  nome: string
}

export interface Autore {
  username: string
  nome: string
  argomenti: string
}

export interface DettagliArticolo {
  idarticolo: number
  titoloarticolo: string
  dataarticolo: string
  testoarticolo: string
  imgarticolo: string
  nome: string
}
