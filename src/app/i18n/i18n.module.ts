import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedLanguageService } from '../shared-language.service';
import { TranslationService } from '../translation-loader-service.service';
import { ProjecttranslationService } from '../projecttranslation.service';
import { AboutTranslationService } from '../about-translation.service';

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers:[SharedLanguageService, TranslationService, ProjecttranslationService, AboutTranslationService ],
  exports: [TranslateModule]
})
export class I18nModule {
  constructor(translate: TranslateService) {
    translate.addLangs(['en']);
    const browserLang = translate.getBrowserLang();
    const supportedLang = browserLang ?? 'en';
    translate.use(supportedLang);
  }
}

export function translateLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, `assets/i18n/`);
}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `assets/i18n/`, '.json');
}

