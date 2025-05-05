import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mid-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mid-block.component.html',
  styleUrl: './mid-block.component.scss',
})
export class MidBlockComponent implements OnInit {
  isMobile: boolean = false;
  constructor(private router: Router) {}

  prestations: any[] = [
    {
      id: 1,
      name: 'Brasero',
      img: 'Brasero.svg',
    },
    {
      id: 2,
      name: 'Tourne broche',
      img: 'porc.png',
    },
    {
      id: 3,
      name: 'Fumoir',
      img: 'komado.png',
    },
  ];

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 480;
  }

  goToPrestations() {
    this.router.navigate(['/prestation']);
  }

  goToOnePrestation(prestationId: number) {
    this.router.navigate(['/prestation'], { queryParams: { id: prestationId } });
  }

  scrollLeft() {
    const container = document.querySelector('.prestation-container') as HTMLElement;
    container.scrollBy({ left: -200, behavior: 'smooth' }); // Défilement à gauche
  }

  scrollRight() {
    const container = document.querySelector('.prestation-container') as HTMLElement;
    container.scrollBy({ left: 200, behavior: 'smooth' }); // Défilement à droite
  }
}
