import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertSpectsComponent } from './concert-spects.component';

describe('ConcertSpectsComponent', () => {
  let component: ConcertSpectsComponent;
  let fixture: ComponentFixture<ConcertSpectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertSpectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertSpectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
