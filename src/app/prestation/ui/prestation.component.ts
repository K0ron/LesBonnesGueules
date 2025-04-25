import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrestationCardComponent } from './component/prestation-card/prestation-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prestation',
  standalone: true,
  imports: [PrestationCardComponent, CommonModule],
  templateUrl: './prestation.component.html',
  styleUrl: './prestation.component.scss',
})
export class PrestationComponent implements OnInit {
  isMobile: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 480;
  }

  goDevis() {
    this.router.navigate(['/devis']);
  }
}
