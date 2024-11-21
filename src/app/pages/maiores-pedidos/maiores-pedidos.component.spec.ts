import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaioresPedidosComponent } from './maiores-pedidos.component';

describe('MaioresPedidosComponent', () => {
  let component: MaioresPedidosComponent;
  let fixture: ComponentFixture<MaioresPedidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaioresPedidosComponent]
    });
    fixture = TestBed.createComponent(MaioresPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
