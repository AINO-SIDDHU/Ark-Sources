import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionGridComponent } from './edition-grid.component';

describe('AddEditionComponent', () => {
  let component: EditionGridComponent;
  let fixture: ComponentFixture<EditionGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditionGridComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
