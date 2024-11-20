import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLocalComponent } from './menu-local.component';

describe('MenuLocalComponent', () => {
  let component: MenuLocalComponent;
  let fixture: ComponentFixture<MenuLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuLocalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
