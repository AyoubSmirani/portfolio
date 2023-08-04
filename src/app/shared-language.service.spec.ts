import { TestBed } from '@angular/core/testing';

import { SharedLanguageService } from './shared-language.service';

describe('SharedLanguageService', () => {
  let service: SharedLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
