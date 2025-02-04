import { Component } from '@angular/core';
import { LoadSpinnerService } from '@com-bam/view-web-lib-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'temp-angular-project';

  constructor(public mLoadSpinnerService: LoadSpinnerService) {

  }
}
