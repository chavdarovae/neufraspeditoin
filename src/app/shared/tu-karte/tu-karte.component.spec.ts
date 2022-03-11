import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuKarteComponent } from './tu-karte.component';

describe('TuKarteComponent', () => {
  let component: TuKarteComponent;
  let fixture: ComponentFixture<TuKarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuKarteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuKarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
