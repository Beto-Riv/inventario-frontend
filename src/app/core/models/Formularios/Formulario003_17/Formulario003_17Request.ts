import { Formulario } from '../FormularioMain';
import { MetaData } from './MetaData';

export class Formulario003_17Request extends Formulario {
  metaData: MetaData;

  constructor() {
    super()
    this.metaData = new MetaData();
  }
}
