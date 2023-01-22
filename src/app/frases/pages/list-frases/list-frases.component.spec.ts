import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFrasesComponent } from './list-frases.component';

describe('ListFrasesComponent', () => {
  let component: ListFrasesComponent;
  let fixture: ComponentFixture<ListFrasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFrasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFrasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
