import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DienstleistungenKarteComponent } from './dienstleistungen-karte.component';

describe('DienstleistungenKarteComponent', () => {
  let component: DienstleistungenKarteComponent;
  let fixture: ComponentFixture<DienstleistungenKarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DienstleistungenKarteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DienstleistungenKarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
