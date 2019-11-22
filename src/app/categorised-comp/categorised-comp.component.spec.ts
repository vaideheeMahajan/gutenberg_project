import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorisedCompComponent } from './categorised-comp.component';

describe('CategorisedCompComponent', () => {
  let component: CategorisedCompComponent;
  let fixture: ComponentFixture<CategorisedCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorisedCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorisedCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
