import { Component, Input } from '@angular/core';
import { StepsService } from '@com-bam/view-web-lib-components';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-step-mobile',
  templateUrl: './step-mobile.component.html',
  styleUrls: ['./step-mobile.component.scss']
})
export class StepMobileComponent {
  @Input() items!: MenuItem[];
  @Input() activeIndex: number = 0;

  showFullText: boolean = false;

  get progress(): number {
    return this.items && (this.activeIndex + 1) * 100 / this.items.length;
  }

  get currentStep(): string {
    return this.items && this.items[this.activeIndex].label!;
  }

  get nextStep(): string {
    let nextStepIndex = this.activeIndex + 1;
    if (nextStepIndex >= this.items.length) {
      return 'Último paso';
    }
    return 'Siguiente: ' + this.items[nextStepIndex].label!;
  }
}
