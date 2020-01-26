import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersistenciaService {
/* servicio para persistir el consumo de la api,
** mejorando el paso de data entre componentes
** y simplificandolo, sin el uso de data binding
*/
  private resoltApi = new BehaviorSubject<any>({});
  api = this.resoltApi.asObservable();

  private detallePeli = new BehaviorSubject<any>({});
  detalle = this.detallePeli.asObservable();
  constructor() { }

  // guardo la data en el observable para poder consumirlo en cualquier parte del modulo o app
  cargarData(data: any) {
    this.resoltApi.next(data);
  }
  cambiarDetalle(data: any) {
    this.detallePeli.next(data);
  }
}
