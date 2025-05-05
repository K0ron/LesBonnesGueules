import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchMenuComponent } from './components/search-menu/search-menu.component';
import { AperoCardComponent } from './components/apero-card/apero-card.component';
import { PlatsCardComponent } from './components/plats-card/plats-card.component';
import { AccompagnementsCardComponent } from './components/accompagnements-card/accompagnements-card.component';
import { FromageDessertCardComponent } from './components/fromage-dessert-card/fromage-dessert-card.component';
import { BoissonCardComponent } from './components/boisson-card/boisson-card.component';
import { MenuEnfantCardComponent } from './components/menu-enfant-card/menu-enfant-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carte',
  standalone: true,
  imports: [
    SearchMenuComponent,
    CommonModule,
    AperoCardComponent,
    PlatsCardComponent,
    AccompagnementsCardComponent,
    FromageDessertCardComponent,
    BoissonCardComponent,
    MenuEnfantCardComponent,
  ],
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.scss',
})
export class CarteComponent implements OnInit {
  selectedCategory: string | null = null;
  isMobile: boolean = false;
  openSection: string | null = null;

  constructor(private router: Router) {}

  goDevis() {
    this.router.navigate(['/devis']);
  }

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 480;
    if (!this.isMobile) {
      this.selectedCategory = 'APERO';
    }
  }

  onCategorySelected(category: string) {
    this.selectedCategory = category;
  }

  goToPrestations() {
    this.router.navigate(['/prestation']);
  }

  toggleSection(section: string, element: HTMLElement) {
    if (this.openSection === section) {
      this.openSection = null;
    } else {
      this.openSection = section;
      setTimeout(() => {
        const yOffset = -90;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 150);
    }
  }

  isOpen(section: string): boolean {
    return this.openSection === section;
  }

  callNumber() {
    window.open('tel:+33626555177');
  }
}
