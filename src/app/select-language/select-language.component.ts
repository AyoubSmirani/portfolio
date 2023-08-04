import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../translation-loader-service.service';

@Component({
  selector: 'app-select-language',
  templateUrl:'./select-language.component.html',
  styleUrls: ['./select-language.component.css']
})
export class SelectLanguageComponent {
  constructor(
    public translate: TranslateService,
    private translationService: TranslationService
  ) {}

  onLanguageChange(lang: string) {
    this.translationService.loadTranslations(lang);
  }
}



