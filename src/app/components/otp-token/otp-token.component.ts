import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CodeInputComponent } from 'angular-code-input';

@Component({
  selector: 'app-otp-token',
  templateUrl: './otp-token.component.html',
  styleUrls: ['./otp-token.component.scss']
})
export class OtpTokenComponent {
  @Input() phoneNumber!: string;
  @Input() isWrongOTP: boolean = false;
  @Input() isMaskedCode: boolean = false;
  @Input() wrongOTPMessage?: string = '';

  @Output() resendCode = new EventEmitter();
  @Output() continueBtnClicked = new EventEmitter();
  @Output() goBackBtnClicked = new EventEmitter();
  @ViewChild('codeInput') codeInput !: CodeInputComponent;


  timeSeconds: any = 59;
  timeMinutes = 0;
  interval: any;
  sendOtpCode = true;

  ngOnInit(): void {
    this.startTimer();
  }

  onCodeChanged(code: string): void {
    this.isWrongOTP = false;
  }

  onCompleteCode(otp: string): void {
    if (this.sendOtpCode) {
      this.codeInput.reset();
    } else {
      this.continueBtnClicked.emit(otp);
      this.codeInput.reset();
    }
  }

  resendOtp(): void {
    this.startTimer();
    this.resendCode.emit('');
  }

  startTimer(): void {
    this.timeSeconds = 0;
    this.timeMinutes = 1;
    this.pauseTimer();

    this.interval = setInterval(() => {
      if (this.timeSeconds > 0) {
        this.sendOtpCode = false;
        this.timeSeconds--;
      } else {
        this.timeSeconds = 59;
        this.timeMinutes--;
      }
      if (this.timeSeconds === 0 && this.timeMinutes === 0) {
        this.pauseTimer();
        this.sendOtpCode = true;
        this.timeSeconds = 0;
        this.timeMinutes = 1;
      }
    }, 1000);
  }

  pauseTimer(): void {
    clearInterval(this.interval);
  }
}
