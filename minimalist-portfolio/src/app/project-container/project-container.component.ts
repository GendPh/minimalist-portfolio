import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectModel } from '../../Model/project.model';
import { CommonModule } from '@angular/common';

declare var lightbox: any;

@Component({
  selector: 'app-project-container',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './project-container.component.html',
})
export class ProjectContainerComponent implements OnInit {
  @Input("GetProject") project: ProjectModel | undefined;

  @Input("GetProjectIndex") index: number = 0;

  ngOnInit(): void {
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
  }
}
