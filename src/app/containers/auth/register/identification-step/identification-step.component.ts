import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StepsService } from '@com-bam/view-web-lib-components';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-identification-step',
  templateUrl: './identification-step.component.html',
  styleUrls: ['./identification-step.component.scss']
})
export class IdentificationStepComponent {
  icons = {
    phone: 'icon-smartphone',
    email: 'icon-mail',
    id: 'icon-id'
  }
  radiobuttonGroup = [
    { id: 'dpi', name: 'DPI', value: 'dpi' },
    { id: 'pasaporte', name: 'Pasaporte', value: 'pasaporte' }
  ];
  isDPI = true;

  formIdentification: FormGroup = new FormGroup({
    phoneNumber: new FormControl('12345678', [Validators.minLength(8), Validators.maxLength(8), Validators.required, Validators.pattern('^[0-9]*$')]),
    email: new FormControl('johann@gmail.com', [Validators.required, Validators.email, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)]),
    identificationType: new FormControl('dpi', [Validators.required]),
    number_identification: new FormControl('1234534543', [Validators.required, Validators.minLength(8), Validators.maxLength(13), Validators.pattern('^[0-9]*$')]),
    pasaporte: new FormControl('', [Validators.minLength(6)])
  });

  constructor(private stepService: StepsService,
    private registerService: RegisterService,
    private router: Router
  ) { }


  onClickCancel() {
    this.router.navigate(['/auth/login']);
  }

  onClickContinue() {
    if (this.formIdentification.valid) {
      this.registerService.setUserData(this.formIdentification.getRawValue());
      this.stepService.nextStep();
    }
  }

  selectTypeDocument(event: any) {
    this.isDPI = event.value === 'dpi';

    if (this.isDPI) {
      this.formIdentification.controls['number_identification'].setValidators([Validators.required]);
      this.formIdentification.controls['pasaporte'].removeValidators([Validators.required]);
    } else {
      this.formIdentification.controls['pasaporte'].setValidators([Validators.required]);
      this.formIdentification.controls['number_identification'].removeValidators([Validators.required]);
    }

    this.formIdentification.controls['number_identification'].updateValueAndValidity();
    this.formIdentification.controls['pasaporte'].updateValueAndValidity();
  }

  validateNumberField(event: any) {
    let regex = !/\d|37|38|39|40|8|46|Backspace|Delete|ArrowLeft|ArrowRight/.test(event.key)
    regex && event.preventDefault();
  }

  getIsErrorControl(control: string): boolean {
    let { dirty, invalid } = this.formIdentification.get(control) as AbstractControl;
    return dirty && invalid;
  }
}
