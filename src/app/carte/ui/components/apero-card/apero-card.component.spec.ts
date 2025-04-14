import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AperoCardComponent } from './apero-card.component';

describe('AperoCardComponent', () => {
  let component: AperoCardComponent;
  let fixture: ComponentFixture<AperoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AperoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AperoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
