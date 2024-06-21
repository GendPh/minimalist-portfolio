import { Injectable } from '@angular/core';
import { ProjectModel } from '../Model/project.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  url: string = 'assets/projects.json';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(this.url);  // Corrected path
  }

  getProjectByName(name: string): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(this.url).pipe(
      map(
        (projects: ProjectModel[]) => {
          const project = projects.find(project => project.title === name);
          return project ? [project] : [];
        }
      )
    );
  }
  getProjectBeforeAndNext(name: string): Observable<string[]> {
    return this.http.get<ProjectModel[]>(this.url).pipe(
      map((projects: ProjectModel[]) => {
        let before = '';
        let next = '';

        const index = projects.findIndex(project => project.title === name);

        if (index === projects.length - 1) {
          before = projects[index - 1].title;
          next = projects[0].title;
        } else if (index === 0) {
          before = projects[projects.length - 1].title;
          next = projects[index + 1].title;
        } else {
          before = projects[index - 1].title;
          next = projects[index + 1].title;
        }

        return [before, next];
      })
    );
  }

}
