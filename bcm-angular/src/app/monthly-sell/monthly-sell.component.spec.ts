import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlySellComponent } from './monthly-sell.component';

describe('MonthlySellComponent', () => {
  let component: MonthlySellComponent;
  let fixture: ComponentFixture<MonthlySellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlySellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthlySellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
