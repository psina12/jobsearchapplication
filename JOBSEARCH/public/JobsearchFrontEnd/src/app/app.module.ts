import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobComponent } from './job/job.component';
import { DeleteComponent } from './delete/delete.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AddjobComponent } from './addjob/addjob.component';
import { FormsModule } from '@angular/forms';
import { EditjobComponent } from './editjob/editjob.component';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    JobComponent,
    DeleteComponent,
    HomeComponent,
    NavigationComponent,
    AddjobComponent,
    EditjobComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:"",
        component:HomeComponent
      },
      {
        path:"jobs",
        component:JobsComponent
      },
      {
        path:"jobs/:jobId",
        component:JobComponent
      },
      {
        path:"add",
        component:AddjobComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
