import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationGridComponent } from './publication-grid.component';

describe('PublicationGridComponent', () => {
  let component: PublicationGridComponent;
  let fixture: ComponentFixture<PublicationGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
