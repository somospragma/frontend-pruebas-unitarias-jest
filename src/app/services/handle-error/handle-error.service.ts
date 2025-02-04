import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

/**
 * Description: complementary service to control errors presented in services that consume apis
 * @date: 2023-10-10
 * @author: John Buitrago
 * @service
 */
@Injectable({ providedIn: 'root' })
export class HandleErrorService {

  /**
   * Description: allows injection of the modalService dependency to display an error modal with the description of the presented error
   * @date: 2023-10-10
   * @author: John Buitrago
   * @param {ModalService} modalService
   * @constructor
   */
  constructor() { }

  /**
   * Description: prints the error in the console, displays the error modal to the user and returns a modified response to handle the error from the source component of the call
   * @date: 2023-10-10
   * @author: John Buitrago
   * @param {string} process
   * @param {HttpErrorResponse} error
   * @returns a modified answer to the error presented
   * @method
   */
  public handleError(process: string, error: HttpErrorResponse): Observable<any> {
    console.log(`Failed ${process} - Error ${error.message}`);
    // this.modalService.generalErrorModal();
    return of({ error: true });
  }
}
