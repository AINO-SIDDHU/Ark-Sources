import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcehometabComponent } from './sourcehometab.component';

describe('SourcehometabComponent', () => {
  let component: SourcehometabComponent;
  let fixture: ComponentFixture<SourcehometabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcehometabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcehometabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
