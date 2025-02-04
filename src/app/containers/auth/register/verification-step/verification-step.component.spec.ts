import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationStepComponent } from './verification-step.component';
import { LoadSpinnerService, ModalContentService, StepsService } from '@com-bam/view-web-lib-components';
import { RegisterService } from 'src/app/services/register/register.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const mockModalContentService = {
  open: jest.fn(),
  close: jest.fn()
};

describe('VerificationStepComponent', () => {
  let component: VerificationStepComponent;
  let fixture: ComponentFixture<VerificationStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        StepsService,
        LoadSpinnerService,
        RegisterService,
        { provide: ModalContentService, useValue: mockModalContentService },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(VerificationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should send to the next step', () => {
    let spyOnNextStep = jest.spyOn(component['stepsService'], 'nextStep');
    component.handleClickContinueBtn('345');

    expect(spyOnNextStep).toHaveBeenCalled();
  });

  it('Should call open function ngAfterViewInit', () => {
    component['ngAfterViewInit']();
    expect(mockModalContentService.open).toHaveBeenCalled();
  });

  it('Should send to the next step', () => {
    let spyOnNextStep = jest.spyOn(component['stepsService'], 'prevStep');
    component.handleClickCloseModal();

    expect(spyOnNextStep).toHaveBeenCalled();
    expect(mockModalContentService.close).toHaveBeenCalled();
  });

  it('Should set otp', () => {
    component.onCodeCompleted('123456');
    expect(component.userData.otp).toEqual('123456');
  });

  it('Should set otp', () => {
    component.codeChanged('1236');
    expect(component.isErrorWithToken).toBeFalsy;
  });
});

