import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { RoomsService } from './rooms.service';

describe('RoomsService', () => {
  let service: RoomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(RoomsService);
  });

  it('Service criada', () => {
    expect(service).toBeTruthy();
  });
});
