import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptGridComponent } from './script-grid.component';

describe('ScriptGridComponent', () => {
  let component: ScriptGridComponent;
  let fixture: ComponentFixture<ScriptGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
