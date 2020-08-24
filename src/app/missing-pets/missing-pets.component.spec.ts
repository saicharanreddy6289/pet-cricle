/*
 * Created by
 * Kadambur Srikanth Vishaali ( B00821049)
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingPetsComponent } from './missing-pets.component';

describe('MissingPetsComponent', () => {
  let component: MissingPetsComponent;
  let fixture: ComponentFixture<MissingPetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingPetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
