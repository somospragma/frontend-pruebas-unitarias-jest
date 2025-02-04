import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationStepComponent } from './configuration-step.component';
import { RegisterService } from 'src/app/services/register/register.service';
import { ViewWebLibModule } from '@com-bam/view-web-lib-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { BrowserModule } from '@angular/platform-browser';
import { CodeInputModule } from 'angular-code-input';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ConfigurationStepComponent', () => {
  let component: ConfigurationStepComponent;
  let fixture: ComponentFixture<ConfigurationStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientTestingModule
      ],
      providers: [RegisterService],
      schemas: []
    }).compileComponents();
    fixture = TestBed.createComponent(ConfigurationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Get is control valid value on getIsErrorControl', () => {
    expect(component.getIsErrorControl('pin')).toBeFalsy();
  });

  it('Should validate value is number with validatePin', () => {
    let preventDefault = jest.fn();
    component.validatePin({ target: { value: 'df' }, preventDefault });
    component.validatePin({ target: { value: 1 }, preventDefault });

    expect(preventDefault).toHaveBeenCalledTimes(2);
  });

  it('Should validate if pin is equal to confirmPin', () => {
    component.formConfigurationStep.get('pin')?.setValue('1234');
    component.formConfigurationStep.get('confirmPin')?.setValue('1234');
    expect(component.validateConfirmationPin()).toBeTruthy();
  });

  it('Should change isShowConfirmation to true', () => {
    let spyOn = jest.spyOn(component['registerService'], 'setIsShowconfirmation');
    expect(component['registerService'].getIsShowconfirmation()).toBeFalsy();
    component.onSave();
    expect(component['registerService'].getIsShowconfirmation()).toBeTruthy();
    expect(spyOn).toHaveBeenCalled();
  });
});
