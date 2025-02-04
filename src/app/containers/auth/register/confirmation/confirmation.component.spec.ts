import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationComponent } from './confirmation.component';
import { ViewWebLibModule } from '@com-bam/view-web-lib-components';

describe('ConfirmationComponent', () => {
  let component: ConfirmationComponent;
  let fixture: ComponentFixture<ConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
    });
    fixture = TestBed.createComponent(ConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should navigate to login', () => {
    let spyOn = jest.spyOn(component['router'], 'navigate');
    component.onNavigateToLogin();
    expect(spyOn).toHaveBeenCalled();
  });
});
