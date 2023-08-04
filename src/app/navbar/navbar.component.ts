import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router:Router){}
  isMenuOpen: boolean = false;
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  isShowDivIf = true;
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }
  
  goto(url:any){
    this.router.navigate([url])
    this.toggleMenu()
  }

}
