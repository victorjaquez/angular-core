import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@workshop/core-data';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})

// Presentation component,
// only bindings, no logic in this component
// only captures events and delegstes them up
export class ProjectsListComponent {
  // @Input: Data coming in
  @Input() projects: Project;
  @Input() readonly = false;
  // @Outputs: Events w/ data going out
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
