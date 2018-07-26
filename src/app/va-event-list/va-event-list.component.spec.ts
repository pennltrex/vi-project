import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaEventListComponent } from './va-event-list.component';

describe('VaEventListComponent', () => {
  let component: VaEventListComponent;
  let fixture: ComponentFixture<VaEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
