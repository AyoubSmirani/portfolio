import { Component, QueryList, ViewChildren, AfterViewInit, OnInit } from '@angular/core';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';
import { ProfileService } from '../profile.service';
import { TranslationService } from '../translation-loader-service.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  animations: [
    trigger('fadeInLeft', [
      transition(':enter', [
        query('.card', [
          style({ opacity: 0, transform: 'translateX(-10px)' }),
          stagger(100, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        ])
      ])
    ])
  ]
})
export class EducationComponent implements AfterViewInit,OnInit {
  @ViewChildren('cards') educationCards!: QueryList<any>;

  educations:any[] = [
   /* {
      year: '2020 - 2023',
      type: 'Diplôme',
      title: 'Licence en Informatique de Gestion',
      subtitle: 'Spécialité Business Intelligence',
      items: [
        'Institut Supérieur De Gestion De Bizerte',
        "L'informatique appliquée à l'économie-gestion simplifie les tâches répétitives, améliorant l'efficacité opérationnelle et minimisant les erreurs potentielles.",
        'Maintenu des notes moyennes à chaque semestre universitaire.'
      ]
    },
    {
      year: '2018 - 2019',
      type: 'Baccalauréat',
      title: 'Baccalauréat en Économie et Gestion',
      subtitle: 'Lycée Sécondaire Menzel Jemil',
      items: [
        'Combiner l\'économie-gestion avec l\'informatique permet une analyse précise des données, aidant à identifier des tendances et modèles pour des décisions éclairées.',
        'Grâce à une approche basée sur les données, la combinaison de ces domaines offre des décisions mieux informées et rentables pour les entreprises et les projets.'
      ]
    },
    {
      year: '2015 - 2018',
      type: 'École Secondaire',
      title: 'Lycée Sécondaire Menzel Jemil',
      subtitle: 'École Secondaire',
      items: [
        'L\'école secondaire se concentre sur les matières suivantes : mathématiques, anglais, sciences, informatique, économie-gestion, littérature et langues.'
      ]
    }*/
  ];
  constructor(protected profileService:ProfileService,private translationService:TranslationService){}
  ngOnInit(): void {
    this.translationService.educationData$.subscribe(data =>{
      this.educations = data
      console.log(data)
    })
  }
  ngAfterViewInit(): void {
    this.animateCards();
  }

  animateCards(): void {
    this.educationCards.forEach((card: any, index: number) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateX(0)';
      }, 100 * index);
    });
  }
}

