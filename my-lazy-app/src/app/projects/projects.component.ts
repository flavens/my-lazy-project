import { Component, OnInit, Inject } from '@angular/core';
import { KnoraApiConnectionToken } from '@knora/core';
import { KnoraApiConnection, ReadResource, ReadTextValueAsString, ReadProject, ApiResponseData, ProjectsResponse } from '@knora/api';

@Component({
  selector: 'mla-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectList: ReadProject[];

  constructor(@Inject(KnoraApiConnectionToken) private knoraApiConnection: KnoraApiConnection) { }

  ngOnInit(): void {

    this.knoraApiConnection.admin.projectsEndpoint.getProjects().subscribe(
      (response: ApiResponseData<ProjectsResponse>) => {
        this.projectList = response.body.projects;
      },
      err => {
        console.error(err);
      }
    );

  }

}
