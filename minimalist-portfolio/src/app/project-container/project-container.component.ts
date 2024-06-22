import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectModel } from '../../Model/project.model';

declare var lightbox: any;

@Component({
  selector: 'app-project-container',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-container.component.html',
})
export class ProjectContainerComponent implements OnInit {
  @Input("GetProject") project: ProjectModel = {
    id: 0,
    title: "Project Title",
    description: "Project description",
    tags: ["tag1", "tag2"],
    link: "Project Link",
    codeLink: "Project Code Link",
  };
  @Input("GetProjectIndex") index: number = 0;
  
  ngOnInit(): void {
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
  }
}
