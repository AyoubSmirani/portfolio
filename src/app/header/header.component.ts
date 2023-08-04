import { Component ,Renderer2, ElementRef, OnInit} from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
constructor(protected profileService:ProfileService){}
  ngOnInit(): void {
   console.log(this.profileService.checkBack) 
  }
}
