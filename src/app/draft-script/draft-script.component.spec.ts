import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftScriptComponent } from './draft-script.component';

describe('DraftScriptComponent', () => {
  let component: DraftScriptComponent;
  let fixture: ComponentFixture<DraftScriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftScriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
