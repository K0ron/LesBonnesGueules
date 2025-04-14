import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompagnementsCardComponent } from './accompagnements-card.component';

describe('AccompagnementsCardComponent', () => {
  let component: AccompagnementsCardComponent;
  let fixture: ComponentFixture<AccompagnementsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccompagnementsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccompagnementsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
