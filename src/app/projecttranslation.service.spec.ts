import { TestBed } from '@angular/core/testing';

import { ProjecttranslationService } from './projecttranslation.service';

describe('ProjecttranslationService', () => {
  let service: ProjecttranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjecttranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
