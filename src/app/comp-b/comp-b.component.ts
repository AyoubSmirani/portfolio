import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {
  arrayValues: string[] = [];
    constructor(private translate: TranslateService) {}
    arrayValues$ = this.translate.get('array');

  ngOnInit(): void {
    this.translate.get('array').subscribe((translation) => {
      this.arrayValues = translation;
    });
    console.log(this.arrayValues)
  }
 



}
