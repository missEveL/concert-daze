import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertSpectDetailComponent } from './concert-spect-detail.component';

describe('ConcertSpectDetailComponent', () => {
  let component: ConcertSpectDetailComponent;
  let fixture: ComponentFixture<ConcertSpectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertSpectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertSpectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
