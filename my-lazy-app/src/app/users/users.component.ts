import { Component, OnInit, Inject } from '@angular/core';
import { KnoraApiConnectionToken } from '@knora/core';
import { KnoraApiConnection, ReadUser, ApiResponseData, UsersResponse } from '@knora/api';

@Component({
  selector: 'mla-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userList: ReadUser[];

  constructor(@Inject(KnoraApiConnectionToken) private knoraApiConnection: KnoraApiConnection) { }

  ngOnInit(): void {
    this.knoraApiConnection.admin.usersEndpoint.getUsers().subscribe(
      (response: ApiResponseData<UsersResponse>) => {
        this.userList = response.body.users;
      },
      err => {
        console.error(err);
      }
    );
  }

}
