import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnternehmensKarteComponent } from './unternehmens-karte.component';

describe('UnternehmensKarteComponent', () => {
  let component: UnternehmensKarteComponent;
  let fixture: ComponentFixture<UnternehmensKarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnternehmensKarteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnternehmensKarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
