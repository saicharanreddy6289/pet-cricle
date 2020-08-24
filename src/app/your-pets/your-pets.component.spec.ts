import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPetsComponent } from './your-pets.component';

describe('YourPetsComponent', () => {
  let component: YourPetsComponent;
  let fixture: ComponentFixture<YourPetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourPetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
