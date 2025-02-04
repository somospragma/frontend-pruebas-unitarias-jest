import { CommonModule } from "@angular/common";
import { forwardRef, NgModule } from "@angular/core";
import { RegisterComponent } from "./register.component";
import { RegisterRoutingModule } from "./register.routing.module";
import { LoadSpinnerService, StepsService, ViewWebLibModule } from "@com-bam/view-web-lib-components";
import { IdentificationStepComponent } from './identification-step/identification-step.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VerificationStepComponent } from './verification-step/verification-step.component';
import { StepMobileComponent } from 'src/app/components/step-mobile/step-mobile.component';
import { OtpTokenComponent } from 'src/app/components/otp-token/otp-token.component';
import { CodeInputModule } from "angular-code-input";
import { RegisterService } from "src/app/services/register/register.service";
import { ConfigurationStepComponent } from './configuration-step/configuration-step.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    RegisterComponent,
    IdentificationStepComponent,
    VerificationStepComponent,
    StepMobileComponent,
    OtpTokenComponent,
    ConfigurationStepComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ViewWebLibModule,
    RegisterRoutingModule,
    CodeInputModule,
    HttpClientModule
  ],
  providers: [
    StepsService,
    LoadSpinnerService,
    RegisterService
  ],
  bootstrap: [
    RegisterComponent,
    StepMobileComponent,
    IdentificationStepComponent,
    ConfigurationStepComponent
  ]
})
export class RegisterModule { }
