import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertQuestionComponent } from './alert-question.component';

describe('AlertQuestionComponent', () => {
  let component: AlertQuestionComponent;
  let fixture: ComponentFixture<AlertQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
