import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickMealComponent } from './quick-meal.component';

describe('QuickMealComponent', () => {
  let component: QuickMealComponent;
  let fixture: ComponentFixture<QuickMealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickMealComponent]
    });
    fixture = TestBed.createComponent(QuickMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
