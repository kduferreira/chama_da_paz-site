import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaCasaComponent } from './da-casa.component';

describe('DaCasaComponent', () => {
  let component: DaCasaComponent;
  let fixture: ComponentFixture<DaCasaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaCasaComponent]
    });
    fixture = TestBed.createComponent(DaCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
