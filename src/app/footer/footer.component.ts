import { Component, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DividerModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  openSection: string | null = null;
  isMobile: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 1024;
  }

  toggleSection(section: string) {
    this.openSection = this.openSection === section ? null : section;
  }

  isOpen(section: string): boolean {
    return this.openSection === section;
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

  callNumber() {
    window.open('tel:+33626555177');
  }

  sendMail() {
    window.location.href = 'mailto:brasserielesbonnesgueules@gmail.com';
  }

  goToPrivacyPolicy() {
    this.router.navigate(['/politique-de-cookies']);
  }

  goToSiteMap() {
    this.router.navigate(['/plan-du-site']);
  }

  goToLegalNotices() {
    this.router.navigate(['/mentions-legales']);
  }
}
