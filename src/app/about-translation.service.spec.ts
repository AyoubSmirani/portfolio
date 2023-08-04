import { TestBed } from '@angular/core/testing';

import { AboutTranslationService } from './about-translation.service';

describe('AboutTranslationService', () => {
  let service: AboutTranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutTranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
