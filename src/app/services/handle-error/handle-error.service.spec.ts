import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewWebLibModule } from '@com-bam/view-web-lib-components';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

import { HandleErrorService } from "./handle-error.service";

describe('HandleErrorService', () => {
  class ComponentMock { };
  const routesMock = [{ path: '', component: ComponentMock }];
  const mockModalService = {
    generalErrorModal: () => { }
  };

  let service: HandleErrorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes(routesMock),
      ],
      providers: [
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });
  });

  beforeEach(() => {
    service = TestBed.inject(HandleErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('handleError: should display the error on the console, call the generalErrorModal method and return an object that allows handling the error', async () => {
    const process = 'mockProcess';
    const error = new HttpErrorResponse({ message: 'mockErrorMessage' } as any);
    const spy2 = jest.spyOn(console, 'log').mockImplementation();
    let response = null;
    await service.handleError(process, error).subscribe(resp => response = resp);
    expect(spy2).toHaveBeenCalledTimes(1);
    expect(spy2).toHaveBeenCalledWith(`Failed ${process} - Error ${error.message}`);
    expect(response).toEqual({ error: true });
  });
});
