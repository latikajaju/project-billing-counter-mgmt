import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcmSignupComponent } from './bcm-signup.component';

describe('BcmSignupComponent', () => {
  let component: BcmSignupComponent;
  let fixture: ComponentFixture<BcmSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcmSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BcmSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
