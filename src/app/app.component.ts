
import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ProfileService } from './profile.service';
import { TranslationService } from './translation-loader-service.service';

declare global {
  interface Window {
    VANTA: any;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyPortfolio';
  private vantaInstance: any;
  checkBack:boolean = false;
  back:number = 0xFFFFFF
  constructor(
    private elementRef: ElementRef,
    private router: Router ,// Add the Router to the constructor
    private http:ProfileService,
    private translationService: TranslationService
  ) { }


  ngOnInit(): void {
  
    this.translationService.loadTranslations('fr');

    this.initVanta();
      // Subscribe to the router events
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          // When navigation ends, trigger Vanta.js update
          this.updateVanta();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroyVanta();
  }
  
   



  private initVanta(): void {
    if (window.VANTA) {
      this.vantaInstance = window.VANTA.NET({
        el: this.elementRef.nativeElement.querySelector('.s-section'),
        color: 0xd94f5c,
        backgroundColor:this.back,
        points: 10.00,
        maxDistance: 25.00,
        spacing: 35.00,
        minHeight: 1200.00,
        minWidth: 200.00,
        
      });
    }
  }
  
  private destroyVanta(): void {
    if (this.vantaInstance) {
      this.vantaInstance.destroy();
    }
  }
  private updateVanta(): void {
    if (this.vantaInstance) {
      this.vantaInstance.resize();
    }
  }


  toggle(){
    //  this.checkBack = !this.checkBack;
      this.http.checkBack = !this.http.checkBack 
      if(this.http.checkBack){
        this.back = 0x000000
        
     }else{
       
       
       this.back = 0xFFFFFF
     }
      this.destroyVanta();
      this.ngOnInit()

  }
}
