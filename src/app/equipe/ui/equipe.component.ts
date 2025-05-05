import { Component, OnInit } from '@angular/core';
import { TeamCardComponent } from './component/team-card/team-card.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipe',
  standalone: true,
  imports: [TeamCardComponent, CommonModule],
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.scss',
})
export class EquipeComponent implements OnInit {
  isMobile: boolean = false;
  isTabletVert: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 394;
    this.isTabletVert = window.innerWidth < 769;
  }

  goDevis() {
    this.router.navigate(['/devis']);
  }

  callNumber() {
    window.open('tel:+33626555177');
  }
}
