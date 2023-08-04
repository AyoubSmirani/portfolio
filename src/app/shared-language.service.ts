import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class SharedLanguageService {
  constructor(private translate: TranslateService) {}

  getLanguage(): string {
    return this.translate.currentLang || this.translate.getBrowserLang() || 'en';
  }

  setLanguage(languageCode: string) {
    this.translate.use(languageCode);
  }
}
