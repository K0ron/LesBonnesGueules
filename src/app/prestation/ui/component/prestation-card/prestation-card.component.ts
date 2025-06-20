import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousel, CarouselModule } from 'primeng/carousel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prestation-card',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './prestation-card.component.html',
  styleUrl: './prestation-card.component.scss',
})
export class PrestationCardComponent {
  @ViewChildren('carouselRef') carousel!: QueryList<Carousel>;

  constructor(private route: ActivatedRoute, private el: ElementRef) {
    Carousel.prototype.onTouchMove = () => {};
  }

  ngAfterViewInit() {
    this.route.queryParams.subscribe((params) => {
      const id = params['id'];
      if (id) {
        setTimeout(() => {
          const el = this.el.nativeElement.querySelector(`#prestation-${id}`);
          if (el) {
            const headerOffset = 90;
            const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }, 0);
      }
    });
  }

  prestations: any[] = [
    {
      id: 1,
      img: [
        'prestations/brasero/bra-1.webp',
        'prestations/brasero/bra-2.webp',
        'prestations/brasero/bra-3.webp',
        'prestations/brasero/bra-4.webp',
        'prestations/brasero/bra-5.webp',
        'prestations/brasero/bra-6.webp',
      ],
      name: 'Brasero',
      description:
        'Notre brasero convivial est un mélange  entre plancha et barbecue, offrant des grillades savoureuses avec ce goût unique du feu.<br><br>Il permet de cuire vos plats à la perfection tout en créant une ambiance chaleureuse et conviviale, idéale pour partager un bon repas entre amis ou en famille.',
    },
    {
      id: 2,
      img: [
        'prestations/fumoir/presta-fum-1.webp',
        'prestations/fumoir/presta-fum-2.webp',
        'prestations/fumoir/presta-fum-3.webp',
      ],
      name: 'Fumoir',
      description:
        'Le kamado et le smoker sont des équipements de cuisson qui utilisent une chaleur douce et un fumage naturel pour sublimer les viandes.<br><br>Grâce à eux, notre viande est préparée lentement, pour une texture fondante et un goût fumé.',
    },
  ];

  scrollLeft(index: number) {
    this.carousel.toArray()[index]?.navBackward(new Event('click') as unknown as MouseEvent);
  }

  scrollRight(index: number) {
    this.carousel.toArray()[index]?.navForward(new Event('click') as unknown as MouseEvent);
  }
}
