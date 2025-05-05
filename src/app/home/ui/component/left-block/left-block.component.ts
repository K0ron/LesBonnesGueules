import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-block',
  standalone: true,
  imports: [],
  templateUrl: './left-block.component.html',
  styleUrl: './left-block.component.scss',
})
export class LeftBlockComponent {
  constructor(private router: Router) {}

  goDevis() {
    this.router.navigate(['/devis']);
  }

  scrollToText(): void {
    const element = document.getElementById('bottom');
    if (element) {
      const headerOffset = -90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }
}
