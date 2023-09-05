import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlighttComponent } from './add-flightt.component';

describe('AddFlighttComponent', () => {
  let component: AddFlighttComponent;
  let fixture: ComponentFixture<AddFlighttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFlighttComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFlighttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
