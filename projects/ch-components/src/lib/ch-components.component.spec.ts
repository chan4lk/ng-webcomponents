import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChComponentsComponent } from './ch-components.component';

describe('ChComponentsComponent', () => {
  let component: ChComponentsComponent;
  let fixture: ComponentFixture<ChComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
