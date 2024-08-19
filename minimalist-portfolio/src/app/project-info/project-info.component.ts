import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectsService } from '../../Service/projects.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectModel } from '../../Model/project.model';
import { ContactMeLinkComponent } from '../contact-me-link/contact-me-link.component';
import { CommonModule } from '@angular/common';
import { projectAnimation } from '../../Animation/projects.animation';
import { Title } from '@angular/platform-browser';
import { ProjectLoaderComponent } from '../project-loader/project-loader.component';


declare var lightbox: any;


@Component({
  selector: 'app-project-info',
  standalone: true,
  imports: [RouterLink, ContactMeLinkComponent, CommonModule, ProjectLoaderComponent],
  templateUrl: './project-info.component.html',
  animations: [projectAnimation],
})
export class ProjectInfoComponent implements OnInit, OnDestroy {
  project: ProjectModel | undefined;
  projectLoaded: boolean = false;
  projectError: boolean = false;
  projectBefore: string = '';
  projectNext: string = '';

  constructor(
    private projectService: ProjectsService,
    private route: ActivatedRoute,
    private titleService: Title,
  ) { }

  ngOnInit(): void {
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });

    this.route.params.subscribe((params) => {
      const projectName = params['name'];
      this.resetInfo();
      this.titleService.setTitle(`Project: ${projectName}`);
      this.SetProject(projectName);
    });
  }

  SetProject(name: string): void {
    setTimeout(() => {
      this.projectService.getProjectByName(name).subscribe(
        {
          next: (res) => {
            if (res.length > 0) {
              this.project = res[0];
              this.SetBeforeAndNext(name);
            } else {
              this.projectError = true;
            }
          },
          error: () => {
            this.projectError = true;
          },
          complete: () => {
            this.projectLoaded = true;
            window.scrollTo(0, 0);
          }
        }
      )
    }, 300);
  }

  SetBeforeAndNext(name: string): void {
    this.projectService.getProjectBeforeAndNext(name).subscribe(
      {
        next: (res) => {
          this.projectBefore = res[0];
          this.projectNext = res[1];
        }
      }
    );
  }

  resetInfo(): void {
    this.project = undefined;
    this.projectLoaded = false;
    this.projectError = false;
    this.projectBefore = '';
    this.projectNext = '';
  }

  ngOnDestroy(): void {
    this.resetInfo();
  }
}
