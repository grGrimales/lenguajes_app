import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFrasesComponent } from './add-frases.component';

describe('AddFrasesComponent', () => {
  let component: AddFrasesComponent;
  let fixture: ComponentFixture<AddFrasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFrasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFrasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
