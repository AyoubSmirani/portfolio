import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }
  checkBack:boolean = false;

   skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '70%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '70%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT',
      'progress': '70%'
    },
    {
      'id': '7',
      'skill': 'REACT JS',
      'progress': '30%'
    },
    {
      'id': '5',
      'skill': 'SQL , MYSQL',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'MONOGO DB',
      'progress': '65%'
    },
    
    {
      'id': '7',
      'skill': 'SELENEIUM , TEST NG',
      'progress': '30%'
    },
    {
      'id': '8',
      'skill': 'PYTHON',
      'progress': '50%'
    },
    {
      'id': '9',
      'skill': 'JAVA',
      'progress': '40%'
    }
  ];
  resumeurl = "https://docs.google.com/document/d/1WODFuhIzQw2AXPsjt6f3rs-EDWhdhT8s89fOTrGRh70/edit?usp=sharing"

    skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

 
  
}
