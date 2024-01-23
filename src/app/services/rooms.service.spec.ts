import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RoomsService } from './rooms.service';

describe('RoomsService', () => {
  let service: RoomsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [RoomsService]
    });
    service = TestBed.inject(RoomsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

afterEach( () => {
httpMock.verify();
})

  it('Service criada', () => {
    expect(service).toBeTruthy();
  });

  it('Obter dados do get bloco A', () => {
    const mockRooms = [
      {id: 1, name: 'Sala1'},
      {id: 2, name: 'Sala A2'}
    ];

    service.getSalasBlocoA().subscribe((rooms:any) => {
      expect(rooms).toEqual(mockRooms);
    });

    const req = httpMock.expectOne(`${service.urlDominio}/rooms/selecionarSalas/blocoA`)
    expect(req.request.method).toBe('GET');
    req.flush(mockRooms);
  });

  it('Obter dados do get bloco B', () => {
    const mockRooms = [
      {id: 1, name: 'Sala1'},
      {id: 2, name: 'Sala A2'}
    ];

    service.getSalasBlocoB().subscribe((rooms:any) => {
      expect(rooms).toEqual(mockRooms);
    });

    const req = httpMock.expectOne(`${service.urlDominio}/rooms/selecionarSalas/blocoB`)
    expect(req.request.method).toBe('GET');
    req.flush(mockRooms);
  });


});
