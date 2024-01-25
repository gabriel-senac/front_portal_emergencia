import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  urlDominio = 'https://back-emergencia.vercel.app';

  constructor(private http: HttpClient) { 

  }


  getSalasBlocoA(){
    return this.http.get(this.urlDominio + "/rooms/selecionarSalas/blocoA")
  }

  getSalasBlocoB(){
    return this.http.get(this.urlDominio + "/rooms/selecionarSalas/blocoB")
  }
}
