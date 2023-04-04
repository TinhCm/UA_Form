/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BienBanDanhGiaComponent } from './bien-ban-danh-gia.component';

describe('BienBanDanhGiaComponent', () => {
  let component: BienBanDanhGiaComponent;
  let fixture: ComponentFixture<BienBanDanhGiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienBanDanhGiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienBanDanhGiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
