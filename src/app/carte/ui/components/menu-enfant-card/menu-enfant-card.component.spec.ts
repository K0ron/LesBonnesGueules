import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEnfantCardComponent } from './menu-enfant-card.component';

describe('MenuEnfantCardComponent', () => {
  let component: MenuEnfantCardComponent;
  let fixture: ComponentFixture<MenuEnfantCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuEnfantCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuEnfantCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
