import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatsCardComponent } from './plats-card.component';

describe('PlatsCardComponent', () => {
  let component: PlatsCardComponent;
  let fixture: ComponentFixture<PlatsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
