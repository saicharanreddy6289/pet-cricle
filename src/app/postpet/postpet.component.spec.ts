import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpetComponent } from './postpet.component';

describe('PostpetComponent', () => {
  let component: PostpetComponent;
  let fixture: ComponentFixture<PostpetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostpetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
