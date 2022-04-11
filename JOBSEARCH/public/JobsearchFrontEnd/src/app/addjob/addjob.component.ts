import { Component, OnInit, ViewChild } from '@angular/core';
import { Jobs } from '../jobs/jobs.component';
import { NgForm } from '@angular/forms';
import { JobService } from '../job.service';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})
export class AddjobComponent implements OnInit {
 
  @ViewChild("addForm")
  jobForm!:NgForm;
  // job!:Jobs;

  constructor(private service:JobService) { }

  ngOnInit(): void {
  }

  onAdd(){
  
    this.service.AddOneJob(this.jobForm.value).subscribe({
    
      next:()=>{
      },
      error:(err)=>{
       console.log("find and error",err);
      },
      complete:()=>{

     console.log("Get all jobs");
      }
    });
       
  }
}
