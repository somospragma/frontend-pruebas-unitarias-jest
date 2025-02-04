import { Component } from '@angular/core';
import { StepsService } from '@com-bam/view-web-lib-components';
import { RegisterService } from '../../../services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  stepsRegister = [
    { label: 'Datos de contacto e identificación' },
    { label: 'Verificación' },
    { label: 'Configura tu PIN' }
  ]

  constructor(public stepsService: StepsService,
    private registerService: RegisterService
  ) {
    this.stepsService.setStepsItems(this.stepsRegister);
  }

  getIsShowconfirmation() {
    return this.registerService.getIsShowconfirmation();
  }
}
