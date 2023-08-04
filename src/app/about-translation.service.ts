import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AboutTranslationService {


  private translatedStringSubject = new BehaviorSubject<string>('');
  translatedString$: Observable<string> = this.translatedStringSubject.asObservable();

  constructor(private translate: TranslateService) { }

  loadTranslation(languageCode: string) {
    this.translate.use(languageCode); // Change the language using the TranslateService
    this.translate.get('about1').subscribe((translation: any) => {
      this.translatedStringSubject.next(translation);
    });
  }

}
