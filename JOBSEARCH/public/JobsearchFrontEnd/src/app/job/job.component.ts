import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../job.service';
import { Jobs } from '../jobs/jobs.component';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  
  jobId!:string;
  job!:Jobs;

  constructor(private route:ActivatedRoute, private service:JobService)
 {
  // this.job = new Jobs("", "",0,"",[], new location("","","","","",""));

 }


  ngOnInit(): void {

    this.jobId = this.route.snapshot.params["jobId"];
    this.getJobFromServer();

  }


  getJobFromServer(){

     this.service.getOneJob(this.jobId).subscribe
     ({
        next:(result)=>{
          this.job=result;
        },
        error:(err)=>{
          console.log("Find an error", err);
        },

        complete:()=>{
          console.log("Get All Jobs");
        }
       
     })
  }


}
