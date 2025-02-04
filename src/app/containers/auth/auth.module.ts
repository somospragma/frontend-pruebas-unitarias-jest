import { NgModule } from "@angular/core";
import { RegisterModule } from "./register/register.module";
import { AuthRoutingModule } from "./auth.routing.module";

@NgModule({
  declarations: [
  ],
  imports: [
    RegisterModule,
    AuthRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AuthModule { }
