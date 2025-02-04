import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpTokenComponent } from './otp-token.component';
import { CodeInputModule } from 'angular-code-input';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OtpTokenComponent', () => {
  let component: OtpTokenComponent;
  let fixture: ComponentFixture<OtpTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtpTokenComponent],
      imports: [
        CodeInputModule,
      ]
    });
    fixture = TestBed.createComponent(OtpTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call onCodeChanged', () => {
    component.isWrongOTP = true;
    component.onCodeChanged('464368');
    expect(component.isWrongOTP).toBeFalsy();
  })

  it('Should call onCompleteCode', () => {
    let spyContinueBtnClicked = jest.spyOn(component.continueBtnClicked, 'emit');
    let spyCodeInputeReset = jest.spyOn(component.codeInput, 'reset');

    component.onCompleteCode('464368');
    component.sendOtpCode = false;
    component.onCompleteCode('464368');
    expect(spyContinueBtnClicked).toHaveBeenCalled();
    expect(spyCodeInputeReset).toHaveBeenCalled();
  })

  it('Should call resendOtp', () => {
    let spyStartTimer = jest.spyOn(component, 'startTimer');
    let spyResendCode = jest.spyOn(component.resendCode, 'emit');

    component.resendOtp();
    expect(spyStartTimer).toHaveBeenCalled();
    expect(spyResendCode).toHaveBeenCalled();
  })

  it('Should call startTimer', async () => {
    component.startTimer();

    await new Promise((r) => setTimeout(r, 1000));
    expect(component.timeSeconds).toBe(59);
    expect(component.timeMinutes).toBe(0);
    expect(component.sendOtpCode).toBeTruthy();

    await new Promise((r) => setTimeout(r, 1000));
    expect(component.sendOtpCode).toBeFalsy();

    component.timeSeconds = 1;
    component.timeMinutes = 0;
    await new Promise((r) => setTimeout(r, 1000));
    expect(component.sendOtpCode).toBeTruthy();
  })
});
