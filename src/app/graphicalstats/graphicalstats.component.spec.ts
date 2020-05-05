import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicalstatsComponent } from './graphicalstats.component';

describe('GraphicalstatsComponent', () => {
  let component: GraphicalstatsComponent;
  let fixture: ComponentFixture<GraphicalstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicalstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicalstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
