import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnoteComponent } from './viewnote.component';

describe('ViewnoteComponent', () => {
  let component: ViewnoteComponent;
  let fixture: ComponentFixture<ViewnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
