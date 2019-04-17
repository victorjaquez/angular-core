import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { MaterialModule } from '@workshop/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { Project, ProjectsService } from '@workshop/core-data';
import { By } from '@angular/platform-browser';

describe('ProjectsComponent', () => {
  // Create local test members
  // Define component you want to test
  let component: ProjectsComponent;
  // Define component fixture that holds your component that you want to test
  let fixture: ComponentFixture<ProjectsComponent>;
  // Debug element
  let de: DebugElement;
  // services
  let projectsService: ProjectsService;

  // mock service
  // const mockProjectsService = {
  //   // mock
  // };

  // mock project
  const emptyProject: Project = {
    id: null,
    title: '',
    details: '',
    percentComplete: 0,
    approved: false
  };
  // Testbed - Most important part
  // Instantitate Testbed
  beforeEach(() => {
    // creating a standalone mock ngModule
    // pass in your object
    // also pass in modules or components that the component is depending on
    fixture = TestBed.configureTestingModule({
      declarations: [
        ProjectsComponent,
        ProjectsListComponent,
        ProjectDetailsComponent
      ],
      // inject service, and use mock service to test, with useValue
      // providers: [{ provide: ProjectsService, useValue: mockProjectsService }],
      imports: [
        MaterialModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
      ]
    }).createComponent(ProjectsComponent);

    // reference to THE mock component instance  we want to test
    component = fixture.componentInstance;
    // instantiated element of this mock component, with some debug stuff baked into it
    // where you can set a property, and test the DOM of it, that its rendering, etc
    de = fixture.debugElement;

    // get service instance
    // projectsService = de.injector.get(ProjectsService);

    // when you create a component in a testbed, it doesn't automatically trigger change detection
    fixture.detectChanges();
  });

  // every property or method that's on your component, you now have access to, and test. i.e is propery set? can i call? etc

  // create test for primaryColor property
  it('should have a primaryColor of `red`', () => {
    expect(component.primaryColor).toBe('red');
  });

  // test for selectProject method
  it('should select a project', () => {
    component.selectProject(emptyProject);
    expect(component.selectedProject).toBe(emptyProject);
  });

  // test for display of primaryColor with DebugElement query, and By to query the DOM
  it('should display primaryColor', () => {
    // 'By' allows us to query the DOM
    const h1 = de.query(By.css('h1'));
    expect(h1.nativeElement.innerText).toBe('red');
  });

  it('should update h1 to new primaryColor', () => {
    const h1 = de.query(By.css('h1'));
    component.primaryColor = 'black';
    fixture.detectChanges();
    expect(h1.nativeElement.innerText).toBe('black');
  });
});
