import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NichtGefundenComponent } from './nicht-gefunden.component';

describe('NichtGefundenComponent', () => {
  let component: NichtGefundenComponent;
  let fixture: ComponentFixture<NichtGefundenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NichtGefundenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NichtGefundenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
