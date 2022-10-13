import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationsComponent } from './formations/formations.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'formations', component: FormationsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'detail/:id', component: FormationDetailComponent },
  { path: '', redirectTo: '/formations', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }