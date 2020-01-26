import { Component, OnInit } from '@angular/core';
import { PersistenciaService } from '../../servicio/persistencia/persistencia.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  data: any;
  constructor(
    private persistencia: PersistenciaService,
    private location: Location
  ) {

    this.persistencia.detalle.subscribe(res => {
      this.data = res;
      console.log(this.data.link.url)
    });
  }

  ngOnInit() {
  }
  // nos redirige a la pagina anterior
  atras() {
    this.location.back();
  }
  // abre una nueva pestaña para redirigir a la pestaña que nos indica la api
  openUrl(url){
    if (url !== '' && url !== undefined) {
      window.open(url, '_blank');
  }
  }

}
