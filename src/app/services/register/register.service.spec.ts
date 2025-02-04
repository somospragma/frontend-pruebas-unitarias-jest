import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RegisterService } from './register.service';
import { Observable, of } from 'rxjs';

describe('RegisterService', () => {
  let service: RegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RegisterService);
  });

  it('Should set user data', () => {
    let userData = {
      identificationNumber: '123456789',
      identificationType: 'type',
      email: 'email',
      otp: 'otp',
      phoneNumber: '123456789'
    };
    service.setUserData(userData);

    expect(service.getUserData()).toEqual(userData);
  });

  it('Should get is show confirmation', () => {
    expect(service.getIsShowconfirmation()).toBeFalsy();
  });

  it('Should set is show confirmation', () => {
    service.setIsShowconfirmation(true);
    expect(service.getIsShowconfirmation()).toBeTruthy();
  });

  it('Should call get method from proxy', async () => {
    let spyOn = jest.spyOn(service['proxy'], 'get').mockReturnValue(new Observable<any>(obs => obs.next({
      data: {
        result: [
          { id: 1, name: 'Name 1' },
          { id: 2, name: 'Name 2' },
          { id: 3, name: 'Name 3' },
        ]
      }
    })) as any);
    await service.getDataRegister().subscribe();

    spyOn = jest.spyOn(service['proxy'], 'get').mockReturnValue(new Observable<any>(obs => obs.error({ error: true })) as any);
    await service.getDataRegister().subscribe();

    expect(spyOn).toHaveBeenCalledTimes(2)
  });
});
