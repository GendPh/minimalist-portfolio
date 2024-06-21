import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectHomeComponent } from './project-home/project-home.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent, title: 'Gabriel Ferreira - Portfolio',
  },
  {
    path: 'projects', title: 'Projects', component: ProjectHomeComponent,
  },
  {
    path: 'project/:name', title: 'Project', component: ProjectInfoComponent,
  },
  {
    path: 'contact', title: 'Contact', component: ContactComponent,
  },
  {
    path: '**', redirectTo: '/',
  }
];
