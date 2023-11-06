import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private urlDominio = 'api.teste.com';

  constructor(private http: HttpClient) { 

  }


  getSalas(){
    return this.http.get(this.urlDominio + "/salas")
  }
}
