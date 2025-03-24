import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-block',
  standalone: true,
  imports: [],
  templateUrl: './bottom-block.component.html',
  styleUrl: './bottom-block.component.scss'
})
export class BottomBlockComponent {

  constructor(private router: Router){}

  goDevis() {
    this.router.navigate(['/devis']);
  }

}
