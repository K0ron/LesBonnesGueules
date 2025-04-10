import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrestationCardComponent } from './component/prestation-card/prestation-card.component';


@Component({
  selector: 'app-prestation',
  standalone: true,
  imports: [PrestationCardComponent],
  templateUrl: './prestation.component.html',
  styleUrl: './prestation.component.scss'
})
export class PrestationComponent {

  constructor(private router: Router) {}

  goDevis() {
    this.router.navigate(['/devis']);
  }

}
