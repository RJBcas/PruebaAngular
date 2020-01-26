import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {

  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = environment.URL; //Configuracion del end point de la api
  }

  public apiNY(){
    return this.httpClient.get<any>(this.url);
  }// Funcion para consumir API
}
