import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostcenterCostsComponent } from './costcenter-costs.component';

describe('CostcenterCostsComponent', () => {
  let component: CostcenterCostsComponent;
  let fixture: ComponentFixture<CostcenterCostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostcenterCostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostcenterCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
