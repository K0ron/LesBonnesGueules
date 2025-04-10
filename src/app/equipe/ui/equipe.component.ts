import { Component } from '@angular/core';
import { TeamCardComponent } from "./component/team-card/team-card.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipe',
  standalone: true,
  imports: [TeamCardComponent],
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.scss'
})
export class EquipeComponent {

  constructor(private router: Router) {}

  goDevis() {
    this.router.navigate(['/devis']);
  }

}
