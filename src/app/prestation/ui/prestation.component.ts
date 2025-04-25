import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrestationCardComponent } from './component/prestation-card/prestation-card.component';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-prestation',
  standalone: true,
  imports: [PrestationCardComponent, DividerModule],
  templateUrl: './prestation.component.html',
  styleUrl: './prestation.component.scss',
})
export class PrestationComponent {
  constructor(private router: Router) {}

  goDevis() {
    this.router.navigate(['/devis']);
  }
}
