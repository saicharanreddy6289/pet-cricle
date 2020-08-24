import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetdetailslistComponent } from './petdetailslist.component';

describe('PetdetailslistComponent', () => {
  let component: PetdetailslistComponent;
  let fixture: ComponentFixture<PetdetailslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetdetailslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetdetailslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
