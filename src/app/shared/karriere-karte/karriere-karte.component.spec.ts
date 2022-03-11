import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarriereKarteComponent } from './karriere-karte.component';

describe('KarriereKarteComponent', () => {
  let component: KarriereKarteComponent;
  let fixture: ComponentFixture<KarriereKarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarriereKarteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KarriereKarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
