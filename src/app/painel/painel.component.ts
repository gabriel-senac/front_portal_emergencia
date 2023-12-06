import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../services/rooms.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  // salas = [
  //   { numSala: '301B', emergencia: true },
  //   { numSala: '302B', emergencia: false },
  //   { numSala: '303B', emergencia: true },
  //   { numSala: '304B', emergencia: false },
  //   { numSala: '305B', emergencia: false },
  //   { numSala: '306B', emergencia: true },
  //   { numSala: '307B', emergencia: false },
  //   { numSala: '308B', emergencia: true },

  // ];


  audio: any;
  salas: any;
  salasB: any


  constructor(private room_service: RoomsService) {

  }

  ngOnInit() {
    //this.playAudio();
    this.obterMapaSalasBlocoA();
    this.obterMapaSalasBlocoB();

    interval(2000).subscribe(() => {
      this.obterMapaSalasBlocoA();
      this.obterMapaSalasBlocoB();
    });

  }

  obterMapaSalasBlocoA() {

    this.room_service.getSalasBlocoA().subscribe(data => {
      //@ts-ignore
      this.salas = data[0];


      for (let index = 0; index < this.salas.length; index++) {

        if (this.salas[index].Emergencia === 1) {
           this.playAudio()
        }

      }

    })

  }

  obterMapaSalasBlocoB() {


    this.room_service.getSalasBlocoB().subscribe(data => {
      //@ts-ignore
      this.salasB = data[0];


      for (let index = 0; index < this.salasB.length; index++) {

        if (this.salasB[index].Emergencia === 1) {
           this.playAudio()
        }

      }

    })

  }

  playAudio() {

    this.audio = document.getElementById('myAudio');
    this.audio.play();


  }


  stopAudio() {
    this.audio = document.getElementById('myAudio');
    this.audio.pause();
  }







}
