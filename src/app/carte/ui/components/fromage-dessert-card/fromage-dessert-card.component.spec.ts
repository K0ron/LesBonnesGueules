import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromageDessertCardComponent } from './fromage-dessert-card.component';

describe('FromageDessertCardComponent', () => {
  let component: FromageDessertCardComponent;
  let fixture: ComponentFixture<FromageDessertCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromageDessertCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromageDessertCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
