/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TamizajeComponent } from './tamizaje.component';

describe('TamizajeComponent', () => {
  let component: TamizajeComponent;
  let fixture: ComponentFixture<TamizajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TamizajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamizajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
