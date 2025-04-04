import { TipoDocumentoModel } from '../../TipoDocumentoModel';

export class Seccion1 {
    nombres: string
    apellidoPaterno: string
    apellidoMaterno: string
    tipoDocumento: TipoDocumentoModel
    numeroDocumento:string
    ruc: string
    telefono: string
    celular: string
    email: string
    domicilioLegal: string
    departamento: string
    provincia: string
    distrito: string
    ubigeo: string
    
    constructor(){
        this.tipoDocumento = new TipoDocumentoModel();
    }
}

export class Seccion2 {
    declaracion1: boolean
    dia:string
    mes:string
    anio:string
}