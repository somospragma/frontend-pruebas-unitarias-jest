import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepMobileComponent } from './step-mobile.component';

describe('StepMobileComponent', () => {
  let component: StepMobileComponent;
  let fixture: ComponentFixture<StepMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepMobileComponent],
    });

    fixture = TestBed.createComponent(StepMobileComponent);
    component = fixture.componentInstance;
    component.items = [
      { label: 'First step' },
      { label: 'Second step' },
      { label: 'Third step' },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return label right', () => {
    component.activeIndex = 0;

    expect(component.currentStep).toEqual(component.items[component.activeIndex].label);
  });

  it('Should return label contain "Siguiente"', () => {
    component.activeIndex = 0;
    expect(component.nextStep).toContain('Siguiente');
  });

  it('Should return label contain "Último paso"', () => {
    component.activeIndex = component.items.length - 1;
    expect(component.nextStep).toContain('Último paso');
  });
});
