import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcProductsComponent } from './calc-products.component';

describe('CalcProductsComponent', () => {
  let component: CalcProductsComponent;
  let fixture: ComponentFixture<CalcProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
