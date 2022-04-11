import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../job.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
 
  @Input()
  jobId!:string;

  constructor(private service:JobService, private router:Router) { }

  ngOnInit(): void {
  }

  onDelete(){
  this.service.deleteOneJob(this.jobId).subscribe({
    next:(result)=>{
      this.router.navigate(['/jobs']);
    },
    error:(err)=>{
      console.log("Find an error", err);
    },
    complete:()=>{
     console.log("Jobs deleted");
    }
  });
  }
}
