import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjecttranslationService {

  private projectDataSubject = new BehaviorSubject<any[]>([]);
  projectData$: Observable<any[]> = this.projectDataSubject.asObservable();

  constructor(private translate: TranslateService) {}

  loadTranslations(languageCode: string) {
    this.translate.use(languageCode); // Change the language using the TranslateService
    this.translate.get('projectData').subscribe((translation) => {
      this.projectDataSubject.next(translation);
    });
  }
}
