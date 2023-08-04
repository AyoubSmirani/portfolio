import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { EducationComponent } from './education/education.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SplitPipe } from './split.pipe';
//import { ProfileComponent } from './Profile/profile.component';
//import {FadeInAnimationDirective} from '../../directives/gsap/fade-in-animations.directive';
//import {CoreAnimationDirective} from '../../directives/gsap/core-animation.directive';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BirdsComponent } from './rings-component/rings-component.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { I18nModule } from './i18n/i18n.module';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { AboutTranslationService } from './about-translation.service';
import { ProjecttranslationService } from './projecttranslation.service';

/*const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];*/
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    EducationComponent,
    NavbarComponent,
    AboutComponent,
    ExperienceComponent,
    SplitPipe,
    CompAComponent,
    CompBComponent,
    SelectLanguageComponent,
    SkillsComponent,
       ProjectComponent,
       BirdsComponent,
       FooterComponent,
       ContactComponent,
       SelectLanguageComponent
  ],
  imports: [
   // RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    I18nModule
  ],
  providers: [AboutTranslationService,ProjecttranslationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
