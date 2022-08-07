/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArticService } from './artic.service';

describe('Service: Artic', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticService]
    });
  });

  it('should ...', inject([ArticService], (service: ArticService) => {
    expect(service).toBeTruthy();
  }));
});
