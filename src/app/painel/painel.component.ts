import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  salas: any;

constructor(private room_service: RoomsService){

}

ngOnInit(){
  this.obterMapaSalas();
}


obterMapaSalas(){

  this.room_service.getSalas().subscribe(data => {
    this.salas = data;
  })

}




}
