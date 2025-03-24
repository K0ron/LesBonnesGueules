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

  constructor(private router: Router) {}

  prestations: any[] = [
    {
      id: 1,
      name: 'Brasero',
      img: 'Brasero.svg'
    },
    {
      id: 2,
      name: 'Tourne broche',
      img: 'Brasero.svg'
    },
    {
      id: 3,
      name: 'Fumoir',
      img: 'Brasero.svg'
    },
    {
      id: 4,
      name: 'Fumoir',
      img: 'Brasero.svg'
    },
    {
      id: 5,
      name: 'Fumoir',
      img: 'Brasero.svg'
    },
  ]

  ngOnInit(): void {}

  goToPrestations() {
    this.router.navigate(['/prestation']);
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
