import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bottom-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bottom-block.component.html',
  styleUrl: './bottom-block.component.scss',
})
export class BottomBlockComponent implements OnInit {
  isMobile: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 1024;
  }

  goDevis() {
    this.router.navigate(['/devis']);
  }

  callNumber() {
    window.open('tel:+33626555177');
  }
}
