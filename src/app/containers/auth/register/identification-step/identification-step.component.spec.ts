import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificationStepComponent } from './identification-step.component';
import { StepsService, ViewWebLibModule } from '@com-bam/view-web-lib-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IdentificationStepComponent', () => {
  let component: IdentificationStepComponent;
  let fixture: ComponentFixture<IdentificationStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientTestingModule
      ],
      providers: [
        StepsService,
        RegisterService,
        RouterTestingModule
      ],
      schemas: []
    }).compileComponents();
    fixture = TestBed.createComponent(IdentificationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should navigate to auth/login', () => {
    let spyOn = jest.spyOn(component['router'], 'navigate');
    component.onClickCancel();
    expect(spyOn).toHaveBeenCalled();
  });

  it('Should send to the next step', () => {
    let spyOnSetUserData = jest.spyOn(component['registerService'], 'setUserData');
    let spyOnNextStep = jest.spyOn(component['stepService'], 'nextStep');
    component.formIdentification.controls['phoneNumber'].setValue('12345678');
    component.formIdentification.controls['email'].setValue('pragma@pragma.com.co');
    component.formIdentification.controls['identificationType'].setValue('dpi');
    component.formIdentification.controls['number_identification'].setValue('12345678');
    component.onClickContinue();

    expect(spyOnSetUserData).toHaveBeenCalled();
    expect(spyOnNextStep).toHaveBeenCalled();
  });

  it('Should update validators on form control', () => {
    let spyOnNumIdent = jest.spyOn(component.formIdentification.controls['number_identification'], 'setValidators');
    component.selectTypeDocument({ value: 'dpi' });
    component.selectTypeDocument({ value: 'passport' });

    expect(spyOnNumIdent).toHaveBeenCalledTimes(2);
  });

  it('Validate if is number', () => {
    let preventDefault = jest.fn();
    component.validateNumberField({ key: 'f', preventDefault })
    expect(preventDefault).toHaveBeenCalled();
  })

  it('Get is control valid value on getIsErrorControl', () => {
    component.formIdentification.controls['phoneNumber'].setValue('12345678');
    expect(component.getIsErrorControl('number_identification')).toBeFalsy();
  });
});
