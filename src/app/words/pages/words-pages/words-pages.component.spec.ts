import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsPagesComponent } from './words-pages.component';

describe('WordsPagesComponent', () => {
  let component: WordsPagesComponent;
  let fixture: ComponentFixture<WordsPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
