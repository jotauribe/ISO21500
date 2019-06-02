import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousInformationComponent } from './previous-information.component';

describe('PreviousInformationComponent', () => {
  let component: PreviousInformationComponent;
  let fixture: ComponentFixture<PreviousInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
