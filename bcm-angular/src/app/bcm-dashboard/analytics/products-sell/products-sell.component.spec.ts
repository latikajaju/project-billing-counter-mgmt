import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSellComponent } from './products-sell.component';

describe('ProductsSellComponent', () => {
  let component: ProductsSellComponent;
  let fixture: ComponentFixture<ProductsSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsSellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
