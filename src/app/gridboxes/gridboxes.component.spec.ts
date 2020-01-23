import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridboxesComponent } from './gridboxes.component';

describe('GridboxesComponent', () => {
  let component: GridboxesComponent;
  let fixture: ComponentFixture<GridboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
