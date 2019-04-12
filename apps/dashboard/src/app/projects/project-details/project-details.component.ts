import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@workshop/core-data';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent {
  currentProject: Project;
  originalTitle;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  // Fixes shared mutable state problem
  // The "set" syntax binds an object property to a function to be called when there is an attempt to set that property
  // Create local copy of state
  // Copy the values f all enumerable properties to the target object in this case, an empty object.
  // You are no longer dealing w/ application state, now you have presentational state
  //
  @Input()
  set project(value) {
    if (value) this.originalTitle = value.title;
    this.currentProject = Object.assign({}, value);
  }
}
