import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateListenWordsComponent } from './generate-listen-words.component';

describe('GenerateListenWordsComponent', () => {
  let component: GenerateListenWordsComponent;
  let fixture: ComponentFixture<GenerateListenWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateListenWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateListenWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
