import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcmLoginComponent } from './bcm-login.component';
import { UserServiceService } from '../user-service.service';

describe('BcmLoginComponent', () => {
  let component: BcmLoginComponent;
  let fixture: ComponentFixture<BcmLoginComponent>;
  let authService: UserServiceService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcmLoginComponent],
      providers:[{
        provide: UserServiceService
      }]
    })
    .compileComponents();
    fixture = TestBed.createComponent(BcmLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
