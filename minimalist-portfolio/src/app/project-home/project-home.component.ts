import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectContainerComponent } from '../project-container/project-container.component';
import { CommonModule } from '@angular/common';
import { ContactMeLinkComponent } from '../contact-me-link/contact-me-link.component';
import { ProjectModel } from '../../Model/project.model';
import { ProjectsService } from '../../Service/projects.service';
import { projectAnimation } from '../../Animation/projects.animation';
import { ProjectLoaderComponent } from '../project-loader/project-loader.component';

@Component({
  selector: 'app-project-home',
  standalone: true,
  imports: [CommonModule, ProjectLoaderComponent, ProjectContainerComponent, ContactMeLinkComponent,],
  templateUrl: './project-home.component.html',
  animations: [projectAnimation],
})

export class ProjectHomeComponent implements OnInit, OnDestroy {
  projects: ProjectModel[] = [];
  projectsLoaded: boolean = false;
  projectsError: boolean = false;

  constructor(private projectService: ProjectsService,) { window.scrollTo(0, 0) }

  ngOnInit(): void {
    setTimeout(() => {
      this.projectService.getProjects().subscribe(
        {
          next: (result) => {
            this.projects = result;
            window.scrollTo(0, 0);
          },
          error: () => {
            this.projectsError = true;
          },
          complete: () => {
            this.projectsLoaded = true;
          }
        }
      )
    }, 500);
  }

  ngOnDestroy(): void {
    this.projects = [];
    this.projectsLoaded = false;
    this.projectsError = false;
  }

}
