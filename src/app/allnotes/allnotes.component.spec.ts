import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllnotesComponent } from './allnotes.component';

describe('AllnotesComponent', () => {
  let component: AllnotesComponent;
  let fixture: ComponentFixture<AllnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
