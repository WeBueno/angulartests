import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualCostsComponent } from './individual-costs.component';

describe('IndividualCostsComponent', () => {
  let component: IndividualCostsComponent;
  let fixture: ComponentFixture<IndividualCostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualCostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
