import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandortDetailsComponent } from './standort-details.component';

describe('StandortDetailsComponent', () => {
  let component: StandortDetailsComponent;
  let fixture: ComponentFixture<StandortDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandortDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandortDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
