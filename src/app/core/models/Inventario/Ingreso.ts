export interface IngresoRequest{
    idProducto:number;
    idEntrada: number;
    cantidad: string;
    fecha: Date;
}

export interface EliminarIngresoRequest{
    id:number;
}