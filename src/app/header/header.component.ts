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

  constructor(private router: Router) {}

  ngOnInit() {
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
  }

  goDevis() {
    this.router.navigate(['/devis']);
  }

  goToLaCarte() {
    this.router.navigate(['/lacarte']);
  }

  goToPrestations() {
    this.router.navigate(['/prestation']);
  }

  goToEquipe() {
    this.router.navigate(['/lequipe']);
  }

  goToInstagram() {
    window.open('https://www.instagram.com/les_bonnes_gueules/?hl=fr', '_blank');
  }

  goToFacebook() {
    window.open('https://www.facebook.com/p/Les-Bonnes-Gueules-100094581984531/', '_blank');
  }

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }
}
