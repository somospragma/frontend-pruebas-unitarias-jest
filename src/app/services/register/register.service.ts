import { Injectable } from '@angular/core';
import { RegisterInerface } from '../../containers/auth/register/interfaces/register.interface';
import { HttpClient } from '@angular/common/http';
import { HttpProxy } from '@com-bam/logic-lib';
import { environment } from '@environments/environment';
import { catchError, filter, map, of } from 'rxjs';
import { HandleErrorService } from '../handle-error/handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  userData: RegisterInerface = {
    identificationNumber: '',
    identificationType: '',
    email: '',
    otp: '',
    phoneNumber: '',
  };
  isShowconfirmation: boolean = false;
  proxy: HttpProxy;

  constructor(private httpClient: HttpClient,
    private handleErrorService: HandleErrorService
  ) {
    this.proxy = new HttpProxy(httpClient, environment.API_SERVICES.API_PEOPLE)
  }

  getDataRegister() {
    return this.proxy.get<any>('/api/register', '?param=anyvalue')
      .pipe(
        filter(resp => resp.data),
        map(resp => resp.data),
        catchError(err => this.handleErrorService.handleError(`get: ${''}`, err)));
  }

  setUserData(userData: RegisterInerface): void {
    this.userData = userData;
  }
  getUserData(): RegisterInerface {
    return this.userData;
  }

  getIsShowconfirmation(): boolean {
    return this.isShowconfirmation;
  }
  setIsShowconfirmation(isShowconfirmation: boolean) {
    this.isShowconfirmation = isShowconfirmation;
  }
}
