import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchPetComponent } from './match-pet.component';

describe('MatchPetComponent', () => {
  let component: MatchPetComponent;
  let fixture: ComponentFixture<MatchPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
