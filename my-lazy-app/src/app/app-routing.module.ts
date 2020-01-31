import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'project-list',
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
