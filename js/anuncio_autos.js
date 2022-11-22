import Anuncio from './anuncio.js';

export default class Anuncio_Autos extends Anuncio {

    static getLocalStorage() {
        let anuncios = [];
        let anuncio = JSON.parse(localStorage.getItem(AnuncioChild.getMainKey()));
        if (anuncio != null) {
            anuncios.push(anuncio);
        }
        return anuncios;
    }


    constructor(id, titulo, transaccion, descripcion, precio, puertas, kms, potencia) {
        super(id, titulo, transaccion, descripcion, precio);
        this.puertas = puertas;
        this.kms = kms;
        this.potencia = potencia;
    }


    static getMainKey() {
        return 'anuncio';
    }
}