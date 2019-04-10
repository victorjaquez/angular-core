import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-data';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  primaryColor = 'red';
  projects: Project[];
  selectedProject: Project[];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.getProjects();
  }

  selectProject(project) {
    this.selectedProject = project;
    console.log('SELECTED PROJECT', project);
  }

  getProjects() {
    this.projectsService
      .all()
      .subscribe((result: any) => (this.projects = result));
  }

  cancel() {
    this.selectProject(null);
  }
}
