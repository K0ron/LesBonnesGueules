import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prestation-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prestation-card.component.html',
  styleUrl: './prestation-card.component.scss'
})
export class PrestationCardComponent {

  prestations: any[] = [
    {
      id: 1, 
      img: 'prestations/presta-Bra-1.png',
      name: "Brasero",
      description: 'Notre brasero convivial est un mélange  entre plancha et barbecue, offrant des grillades savoureuses avec ce goût unique du feu.<br><br>Il permet de cuire vos plats à la perfection tout en créant une ambiance chaleureuse et conviviale, idéale pour partager un bon repas entre amis ou en famille.'
    },
    {
      id: 2, 
      img: 'prestations/presta-Bra-1.png',
      name: "Tourne Broche",
      description: 'Le tournebroche, c’est la cuisson d’une viande qui tourne lentement au-dessus des braises, pour un festin simple, savoureux et partagé entre bons vivants !'
    },
    {
      id: 3, 
      img: 'prestations/presta-Fum-1.png',
      name: "Fumoir",
      description: 'Le kamado et le smoker sont des équipements de cuisson qui utilisent une chaleur douce et un fumage naturel pour sublimer les viandes.<br><br>Grâce à eux, notre viande est préparée lentement, pour une texture fondante et un goût fumé.'
    },
  ]

}
