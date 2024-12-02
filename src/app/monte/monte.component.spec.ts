import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonteComponent } from './monte.component';

describe('MonteComponent', () => {
  let component: MonteComponent;
  let fixture: ComponentFixture<MonteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonteComponent]
    });
    fixture = TestBed.createComponent(MonteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
