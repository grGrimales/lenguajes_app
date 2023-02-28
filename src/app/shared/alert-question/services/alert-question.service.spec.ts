import { TestBed, inject } from '@angular/core/testing';

import { AlertQuestionService } from './alert-question.service';

describe('AlertQuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertQuestionService]
    });
  });

  it('should be created', inject([AlertQuestionService], (service: AlertQuestionService) => {
    expect(service).toBeTruthy();
  }));
});
