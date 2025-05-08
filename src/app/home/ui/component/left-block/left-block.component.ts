import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-block.component.html',
  styleUrl: './left-block.component.scss',
})
export class LeftBlockComponent implements OnInit {
  isMobile: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 1024;
  }

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
