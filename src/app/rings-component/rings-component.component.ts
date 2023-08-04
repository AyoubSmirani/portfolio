import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';

declare global {
  interface Window {
    VANTA: any;
  }
}

@Component({
  selector: 'app-rings',
  template: '<div #vantaContainer class="s-section"></div>',
  styleUrls:['./rings-component.component.css']
  
})
export class BirdsComponent implements OnInit, OnDestroy {
  private vantaInstance: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.initVanta();
  }

  ngOnDestroy(): void {
    this.destroyVanta();
  }

  private initVanta(): void {
    if (window.VANTA) {
      this.vantaInstance = window.VANTA.NET({
        el: this.elementRef.nativeElement.querySelector('.s-section'),
        color: 0xd94f5c,
        backgroundColor:0x000000 ,
        points: 10.00,
        maxDistance: 25.00,
        spacing: 20.00,
        minHeight: 1500.00,
        minWidth: 200.00,
      });
    }
  }

  private destroyVanta(): void {
    if (this.vantaInstance) {
      this.vantaInstance.destroy();
    }
  }
}



