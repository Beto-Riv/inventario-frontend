export class Seccion1 {
    personaNatural: boolean;
    personaJuridica: boolean;
    razonSocial: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    nombres: string;
    domicilioLegal: string;
    distrito: string;
    provincia: string;
    departamento: string;
    dni: string;
    cePasaporte: string;
    nroRuc: string;
    telefono: string;
    celular: string;
    correo: string;
    notificacion: boolean;
    numeroRucOperador: string;
    razonSocialOperador: string;
    apellidoPaternoRepresentante: string;
    apellidoMaternoRepresentante: string;
    nombresRepresentante: string;
    domicilioRepresentante: string;
    tipoDocRepresentante: string;
    nroDocRepresentante: string;
    nroPartida: string;
    oficinaRegistral: string;
}

export class Seccion2 {
    nroPartida: string;
    oficinaRegistral: string;
}

export class Seccion3 {
  servicioCodigo: string;
  memoriaDescriptiva: boolean;
  impactoAmbiental: boolean;
  habilidadProfesional: boolean;
  pathNameMemoriaDescriptiva: string;
  pathNameImpactoAmbiental: string;
  pathNameHabilidadProfesional: string;
  fileMemoriaDescriptiva: File;
  fileImpactoAmbiental: File;
  fileHabilidadProfesional: File;
  nombreApellido: string;
  profesion: string;
  nroColegiatura: string;
}

export class Seccion4 {
  nroRecibo: string;
  nroOperacion: string;
  fechaPago: string;
}
