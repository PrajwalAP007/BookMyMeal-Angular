import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkMealComponent } from './bulk-meal.component';

describe('BulkMealComponent', () => {
  let component: BulkMealComponent;
  let fixture: ComponentFixture<BulkMealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulkMealComponent]
    });
    fixture = TestBed.createComponent(BulkMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
