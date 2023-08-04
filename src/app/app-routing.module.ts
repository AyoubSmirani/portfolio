import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{
  path: 'acceuil',
  component: HeaderComponent,
  pathMatch:'full'
},
{path:'about',component:AboutComponent},
{path:'experience',component:ExperienceComponent},
{path:'skills',component:SkillsComponent},
{path:'education',component:EducationComponent},
{path:'project',component:ProjectComponent},
{path:'contact',component:ContactComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
