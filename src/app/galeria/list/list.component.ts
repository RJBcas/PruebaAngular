import { Component, OnInit } from '@angular/core';
import { ConsumoService } from '../../servicio/consumo.service';
import { PersistenciaService } from '../../servicio/persistencia/persistencia.service';
import { Router } from '@angular/router';
import { FilterPipe } from '../../pipe/filter.pipe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  filterPost: string = '';
  data: any;
  dataCargada: boolean;
  constructor(private api: ConsumoService,
    private persistencia: PersistenciaService,
    private rout: Router
  ) {
// Carga la data al inicio de la aplicacion, y valida
// si el observable ya esta cargado no vuelve a consumir
// la api asi reduce el consumo la api y mejorar el rendimiento de la aplicacion
    this.persistencia.api.subscribe(res => {
      if (Object.keys(res).length !== 0) {
        this.data = res;
        this.dataCargada = true;
      } else {
        this.dataCargada = false;
        this.cargarDatos();

      }
    });

  }

  ngOnInit() {
  }
  // esta funcion consume la api
  cargarDatos() {
    this.api.apiNY().subscribe(res => {
      this.persistencia.cargarData(res.results);
    });
  }
  detalles(data: any) {
    this.persistencia.cambiarDetalle(data);
    console.log('holaaa')
    this.rout.navigate(['/detalle']);
  }

}
