import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.scss',
})
export class TeamCardComponent {
  teammates: any[] = [
    {
      id: 1,
      img: 'team/JO.webp',
      name: 'Johann',
      nickname: '(JO)',
      role: 'Co-Gérant',
      description:
        'Le sérieux du groupe… enfin, jusqu’à ce qu’il lâche une blague qui fait hésiter entre rire et perplexité.',
      devise: '"Rester pro, mais jamais trop !"',
    },
    {
      id: 2,
      img: 'team/Hadri.webp',
      name: 'Hadrien',
      nickname: '(Ramich)',
      role: 'Co-Gérant',
      description:
        "Grand maître du bavardage, il pourrait commenter un film en temps réel… même s'il ne l'a jamais vu.",
      devise: '"Une phrase de plus, ça ne mange pas de pain !"',
    },
    {
      id: 3,
      img: 'team/Quent.webp',
      name: 'Quentin',
      role: '',
      nickname: '(quent)',
      description:
        'Cuisinier, pâtissier et garant des plaisirs gourmands de l’équipe. Si vous le cherchez, il est sûrement en train de goûter, "juste pour vérifier".',
      devise: '"L’amour, c’est comme le beurre, on n’en a jamais assez !"',
    },
  ];
}
