import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoadSpinnerService, ModalContentService, StepsService } from '@com-bam/view-web-lib-components';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-verification-step',
  templateUrl: './verification-step.component.html',
  styleUrls: ['./verification-step.component.scss']
})
export class VerificationStepComponent implements OnInit, AfterViewInit {
  counterOTP: number = 0;
  userData: any = {
    identificationTypeCode: '',
    identificationTypeNumber: '',
    email: '',
    otp: '',
    phoneNumber: '',
  };
  openpgpLib: any;
  publickey: any;
  isErrorWithToken = false;
  phoneNumber: any = '';

  constructor(
    public stepsService: StepsService,
    public mModalContentService: ModalContentService,
    public mLoadSpinnerService: LoadSpinnerService,
    private registerService: RegisterService
  ) {
    this.userData = this.registerService.getUserData();
    this.phoneNumber = this.userData.phoneNumber.substr(-4);
  }
  ngAfterViewInit(): void {
    this.mModalContentService.open('modal-otp-register');
  }

  ngOnInit(): void {
  }

  onCodeCompleted(otp: any): void {
    this.userData.otp = otp;
  }
  codeChanged(event: any): void {
    if (event.length < 6) {
      this.isErrorWithToken = false;
    }
  }
  resendOtpToken(): void {
  }

  handleClickContinueBtn(otp: string): void {
    this.stepsService.nextStep();
  }
  handleClickCloseModal(): void {
    this.mModalContentService.close('modal-otp-register');
    this.stepsService.prevStep();
  }
}
