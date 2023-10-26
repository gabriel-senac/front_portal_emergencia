import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  salas = [
  {numSala: '301B', emergencia: true},
  {numSala: '302B', emergencia: false},
  {numSala: '303B', emergencia: true},
  {numSala: '304B', emergencia: false},
  {numSala: '305B', emergencia: false},
  {numSala: '306B', emergencia: true},
  {numSala: '307B', emergencia: false},
  {numSala: '308B', emergencia: true}
];


constructor(private room_service: RoomsService){

}

ngOnInit(){
  this.obterMapaSalas();
}


obterMapaSalas(){

  this.room_service.getSalas().subscribe(data => {
    // this.salas = data;
  })

}




}
