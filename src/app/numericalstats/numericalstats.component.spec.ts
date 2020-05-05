import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericalstatsComponent } from './numericalstats.component';

describe('NumericalstatsComponent', () => {
  let component: NumericalstatsComponent;
  let fixture: ComponentFixture<NumericalstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumericalstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericalstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
