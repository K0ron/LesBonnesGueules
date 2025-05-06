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
      img: 'mobile/brasero-mobile.png',
    },
    {
      id: 2,
      name: 'Fumoir',
      img: 'mobile/fumoir-mobile.png',
    },
  ];

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 769;
  }

  goToPrestations() {
    this.router.navigate(['/prestation']);
  }

  goToOnePrestation(prestationId: number) {
    this.router.navigate(['/prestation'], { queryParams: { id: prestationId } });
  }
}
