import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {
  itemsBreadCrumbs = [
    { label: 'Efecto Bam' },
    { label: 'Registro' },
  ]

  constructor(private router: Router) {

  }
  onNavigateToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
