import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-map',
  standalone: true,
  imports: [],
  templateUrl: './site-map.component.html',
  styleUrl: './site-map.component.scss',
})
export class SiteMapComponent {
  constructor(private router: Router) {}

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

  goToPrivacyPolicy() {
    this.router.navigate(['/politique-de-cookies']);
  }

  goToLegalNotices() {
    this.router.navigate(['/mentions-legales']);
  }
}
