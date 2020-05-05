import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationSourcesTabsComponent } from './publication-sources-tabs.component';

describe('PublicationSourcesTabsComponent', () => {
  let component: PublicationSourcesTabsComponent;
  let fixture: ComponentFixture<PublicationSourcesTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationSourcesTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationSourcesTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
