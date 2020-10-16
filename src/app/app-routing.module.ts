import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatsListComponent } from './cats-list/cats-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  /*{path:'', component: EmployeeDetailComponent},*/
  /* Used for redirecting the user to a default page:: full because otherwise prefix will not work */
  {path:'', redirectTo: '/employee-details', pathMatch: 'full'},
  {path:'employees', component: EmployeeListComponent},
  {path:'employees/:id', component:EmployeeListComponent},
  {path:'employee-details', component: EmployeeDetailComponent},
  {path:'cats', component: CatsListComponent},
  {path:'**', component: PageNotFoundComponent} /* Used for displaying page not found */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeListComponent, 
                                  EmployeeDetailComponent, 
                                  CatsListComponent, 
                                  PageNotFoundComponent];