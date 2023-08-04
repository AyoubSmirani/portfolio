import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private experienceDataSubject = new BehaviorSubject<any[]>([]);
  experienceData$: Observable<any[]> = this.experienceDataSubject.asObservable();
 
 
  private projectDataSubject = new BehaviorSubject<any[]>([]);
  projectData$: Observable<any[]> = this.projectDataSubject.asObservable();

  private educationDataSubject = new BehaviorSubject<any[]>([]);
  educationData$: Observable<any[]> = this.educationDataSubject.asObservable();

  private translatedStringSubject = new BehaviorSubject<string>('');
  translatedString$: Observable<string> = this.translatedStringSubject.asObservable();


  constructor(private translate: TranslateService) {}

  loadTranslations(languageCode: string) {
    this.translate.use(languageCode); // Change the language using the TranslateService
    this.translate.get('experienceData').subscribe((translation) => {
      this.experienceDataSubject.next(translation);
    });
   
    this.translate.get('educationData').subscribe((translation) => {
      this.educationDataSubject.next(translation);
    });

    this.translate.get('projectData').subscribe((translation) => {
      this.projectDataSubject.next(translation);
    });

    this.translate.get('about2').subscribe((translation: any) => {
      this.translatedStringSubject.next(translation);
    })
  }




}

