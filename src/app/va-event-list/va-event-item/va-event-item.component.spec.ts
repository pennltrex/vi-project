import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaEventItemComponent } from './va-event-item.component';

describe('VaEventItemComponent', () => {
  let component: VaEventItemComponent;
  let fixture: ComponentFixture<VaEventItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaEventItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaEventItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
