import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './containers/auth/auth.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViewWebLibModule } from '@com-bam/view-web-lib-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AuthModule,
    AppRoutingModule,
    ViewWebLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
