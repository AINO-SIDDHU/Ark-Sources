import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesGridComponent } from './sources-grid.component';

describe('SourcesGridComponent', () => {
  let component: SourcesGridComponent;
  let fixture: ComponentFixture<SourcesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
