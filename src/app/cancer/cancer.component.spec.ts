/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CancerComponent } from './cancer.component';

describe('CancerComponent', () => {
  let component: CancerComponent;
  let fixture: ComponentFixture<CancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
