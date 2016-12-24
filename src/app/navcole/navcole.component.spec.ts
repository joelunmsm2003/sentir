/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavcoleComponent } from './navcole.component';

describe('NavcoleComponent', () => {
  let component: NavcoleComponent;
  let fixture: ComponentFixture<NavcoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavcoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
