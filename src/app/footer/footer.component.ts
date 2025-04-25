import { Component, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DividerModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  openSection: string | null = null;
  isMobile: boolean = false;

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 480;
  }

  toggleSection(section: string) {
    this.openSection = this.openSection === section ? null : section;
  }

  isOpen(section: string): boolean {
    return this.openSection === section;
  }
}
