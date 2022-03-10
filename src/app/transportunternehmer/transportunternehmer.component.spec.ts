import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportunternehmerComponent } from './transportunternehmer.component';

describe('TransportunternehmerComponent', () => {
  let component: TransportunternehmerComponent;
  let fixture: ComponentFixture<TransportunternehmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportunternehmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportunternehmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
