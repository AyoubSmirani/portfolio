import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import { TranslateService } from '@ngx-translate/core';
import { AboutTranslationService } from '../about-translation.service';
import { TranslationService } from '../translation-loader-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
 /* about1: any
  about2: any
  
  constructor(protected profileService:ProfileService) { }
  
    ngOnInit() {
      this.about1 =  this.profileService.about
      this.about2 =  this.profileService.about2
    }*/ 
    about1: any
    about2: any

     constructor(private translationService: TranslationService,protected profileService:ProfileService) {}

  ngOnInit(): void {
    this.translationService.translatedString$.subscribe((translation) => {
      this.about2 = translation;
    });
    console.log(this.about2)
  }
}
