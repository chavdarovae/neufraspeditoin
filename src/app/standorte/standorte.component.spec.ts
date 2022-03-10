import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandorteComponent } from './standorte.component';

describe('StandorteComponent', () => {
  let component: StandorteComponent;
  let fixture: ComponentFixture<StandorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandorteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
