import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-menu.component.html',
  styleUrl: './search-menu.component.scss',
})
export class SearchMenuComponent implements OnInit {
  @Output() categorySelected = new EventEmitter<string>();
  selectedIndex: number | null = null;

  cartes: string[] = [
    'APERO',
    'PLATS',
    'ACCOMPAGNEMENTS',
    'FROMAGE & DESSERT',
    'BOISSONS',
    'MENU ENFANT',
  ];

  ngOnInit(): void {
    this.selectedIndex = 0;
    console.log('MENU', this.selectedIndex);
  }

  selectedMenu(index: number) {
    this.selectedIndex = index;
    console.log('MENU', this.selectedIndex);
    this.categorySelected.emit(this.cartes[index]);
    console.log('CATE', this.cartes[index]);
  }
}
