import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-block',
  standalone: true,
  imports: [],
  templateUrl: './left-block.component.html',
  styleUrl: './left-block.component.scss'
})
export class LeftBlockComponent {

  constructor(private router: Router){}

  goDevis() {
    this.router.navigate(['/devis']);
  }

}
