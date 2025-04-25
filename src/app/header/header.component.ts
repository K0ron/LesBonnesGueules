import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  showButtonDevis: boolean = false;
  isHomePage: boolean = false;
  isScrolled: boolean = false;
  menuIsOpen: boolean = false;
  isMobile: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isMobile = window.innerWidth < 480;
    this.checkIfHome();
    this.showDevis();
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.showDevis();
      this.checkIfHome();
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  private checkIfHome() {
    this.isHomePage = this.router.url === '/home';
  }

  showDevis() {
    const currentUrl = this.router.url;
    if (currentUrl.includes('/home')) {
      this.showButtonDevis = false;
    } else {
      this.showButtonDevis = true;
    }
  }

  goHome() {
    this.router.navigate(['/home']);
    this.toggleMenu();
  }
  goHomePage() {
    this.router.navigate(['/home']);
  }

  goDevis() {
    this.router.navigate(['/devis']);
    this.toggleMenu();
  }

  goToLaCarte() {
    this.router.navigate(['/lacarte']);
    this.toggleMenu();
  }

  goToPrestations() {
    this.router.navigate(['/prestation']);
    this.toggleMenu();
  }

  goToEquipe() {
    this.router.navigate(['/lequipe']);
    this.toggleMenu();
  }

  goToInstagram() {
    window.open('https://www.instagram.com/les_bonnes_gueules/?hl=fr', '_blank');
    this.toggleMenu();
  }

  goToFacebook() {
    window.open('https://www.facebook.com/p/Les-Bonnes-Gueules-100094581984531/', '_blank');
    this.toggleMenu();
  }

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }
}
