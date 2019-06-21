import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigTwoComponent } from './config-two.component';

describe('ConfigTwoComponent', () => {
  let component: ConfigTwoComponent;
  let fixture: ComponentFixture<ConfigTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
