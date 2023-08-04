import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../translation-loader-service.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
})
export class CompAComponent implements OnInit {
  compAValue: string = '';
  compBValue: string = '';




  arrayValues: string[] = [];

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.experienceData$.subscribe((translation) => {
      this.arrayValues = translation;
    });
  }
  }






