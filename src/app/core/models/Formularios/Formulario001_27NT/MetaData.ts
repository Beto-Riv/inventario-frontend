import { Seccion1, Seccion2, Seccion3, Seccion4, Seccion5 } from './Secciones';

export class MetaData {
  unidadOrganica: string
  seccion1: Seccion1;
  seccion2: Seccion2;
  seccion3: Seccion3;
  seccion4: Seccion4;
  seccion5: Seccion5;

  constructor() {
    this.seccion1 = new Seccion1()
    this.seccion2 = new Seccion2()
    this.seccion3 = new Seccion3()
    this.seccion4 = new Seccion4()
    this.seccion5 = new Seccion5()
  }
}