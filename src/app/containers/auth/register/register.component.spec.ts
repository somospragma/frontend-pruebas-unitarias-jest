import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { StepsService } from '@com-bam/view-web-lib-components';
import { RegisterService } from 'src/app/services/register/register.service';
import { StepMobileComponent } from 'src/app/components/step-mobile/step-mobile.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { IdentificationStepComponent } from './identification-step/identification-step.component';
import { VerificationStepComponent } from './verification-step/verification-step.component';
import { ConfigurationStepComponent } from './configuration-step/configuration-step.component';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        HttpClientTestingModule
      ],
      declarations: [
        StepMobileComponent,
        ConfirmationComponent,
        IdentificationStepComponent,
        VerificationStepComponent,
        ConfigurationStepComponent
      ],
      providers: [
        StepsService,
        RegisterService
      ]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getIsShowconfirmation', () => {
    let spyOn = jest.spyOn(component, 'getIsShowconfirmation');
    let isShowConfirmation = component.getIsShowconfirmation()
    expect(isShowConfirmation).toBeFalsy();
    expect(spyOn).toHaveBeenCalled();
  });
});
