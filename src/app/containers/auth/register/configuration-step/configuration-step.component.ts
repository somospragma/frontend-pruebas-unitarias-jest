import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-configuration-step',
  templateUrl: './configuration-step.component.html',
  styleUrls: ['./configuration-step.component.scss']
})
export class ConfigurationStepComponent implements OnInit {
  formConfigurationStep: FormGroup = new FormGroup({
    pin: new FormControl('', [Validators.required]),
    confirmPin: new FormControl('', [Validators.required]),
    terms: new FormControl(false, [Validators.requiredTrue])
  });

  constructor(private registerService: RegisterService) {
  }

  ngOnInit(): void {
  }

  getIsErrorControl(control: string) {
    let { dirty, invalid } = this.formConfigurationStep.get(control) as AbstractControl;
    return dirty && invalid;
  }

  validatePin(event: any) {
    let regex = !/\d|37|38|39|40|8|46|Backspace|Delete|ArrowLeft|ArrowRight/.test(event.key)
    regex && event.preventDefault();
  }

  onClickCancel() {

  }

  onSave() {
    this.registerService.setIsShowconfirmation(true);
  }

  validateConfirmationPin(): boolean {
    let confirmPin = this.formConfigurationStep.get('confirmPin')!.value;
    return confirmPin !== '' && this.formConfigurationStep.get('pin')!.value === confirmPin;
  }
}
