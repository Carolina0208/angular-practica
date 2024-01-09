import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPokemonesComponent } from './tabla-pokemones.component';

describe('TablaPokemonesComponent', () => {
  let component: TablaPokemonesComponent;
  let fixture: ComponentFixture<TablaPokemonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaPokemonesComponent]
    });
    fixture = TestBed.createComponent(TablaPokemonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
