import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigOneComponent } from './config-one.component';

describe('ConfigOneComponent', () => {
  let component: ConfigOneComponent;
  let fixture: ComponentFixture<ConfigOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
