import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseComponent } from './course/course.component';
import { EventComponent } from './event/event.component';
import { ForumsComponent } from './forums/forums.component';

const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'course', component:CourseComponent},
  {path: 'event',component:EventComponent},
  {path:'forums',component:ForumsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
