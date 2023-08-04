import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import { ProjecttranslationService } from '../projecttranslation.service';
import { TranslationService } from '../translation-loader-service.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  config: any;
  projects: any[] =[];

  constructor(protected profileService:ProfileService,private translationService:TranslationService) { }

  ngOnInit() {
    this.translationService.projectData$.subscribe(data =>{
      this.projects = data
    })
    console.log(this.projects)
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.projects.length
    };
  }

  pageChanged(event: any){
    this.config.currentPage = event;
  }
  onLanguageChange(languageCode: string) {
    this.translationService.loadTranslations(languageCode);
  }
}
