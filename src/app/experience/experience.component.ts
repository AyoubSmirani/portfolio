import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import { TranslationService } from '../translation-loader-service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
 /* workexp: any

  constructor(protected profileService:ProfileService,private ) { }

    ngOnInit() {

      this.workexp =  this.profileService.exprience()
      console.log(this.workexp)
    }*/
    workexp!: any[] ;
   

     constructor(private translationService: TranslationService,protected profileService:ProfileService) {}

  ngOnInit(): void {
    this.translationService.experienceData$.subscribe((translation) => {
      this.workexp = translation;
      console.log(this.workexp)
    });
  
  }
  onLanguageChange(languageCode: string) {
    this.translationService.loadTranslations(languageCode);
  }
}
