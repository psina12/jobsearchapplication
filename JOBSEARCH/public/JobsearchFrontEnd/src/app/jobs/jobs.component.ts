import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';

export class location{
  _id!:string;
  city!:string;
}


export class Jobs {
  _id!:string;
  title!:string;
  salary!:number;
  description!:string;
  experience!:number;
  skills!:string[];
  postDate!:string;
  location!:location;
 
  constructor(_id:string,title:string, salary:number, description:string, experience:number, skills:string[], postDate:string,location:location){
    this._id=_id;
    this.title=title;
    this.salary=salary;
    this.description=description;
    this.experience=experience;
    this.skills=skills;
    this.postDate=postDate;
    this.location=location;
  }
}

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs!:Jobs[];
  constructor(private service:JobService) { }

  ngOnInit(): void {
    console.log("I sam In");
    
    this.getJobsFromServer();
  }
 
  getJobsFromServer(){
    this.service.getAllJobs().subscribe({
      next:(result)=>{
        console.log(result);
        
        this.jobs = result;
      },
      error:(err)=>{
       console.log("Find and error",err);
      }, 
      complete:()=>{
      console.log("Get all jobs from server");
      }
    });
  }
}