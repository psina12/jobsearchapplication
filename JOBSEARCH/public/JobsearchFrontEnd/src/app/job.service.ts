import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
 import { Observable } from 'rxjs';
 import { Jobs } from './jobs/jobs.component';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }

   public getAllJobs():Observable<Jobs[]>{
   const url = environment.BASE_URL+"jobs"
    return this.http.get<Jobs[]> (url);
  }

  getOneJob(jobId:string):Observable<Jobs>{
    const url = environment.BASE_URL+"jobs/"+jobId
    return this.http.get<Jobs>(url);
   }

   AddOneJob(job:any):Observable<any>{
     const url = environment.BASE_URL+"jobs"
     return this.http.post<any>(url,job);
   }
 
   deleteOneJob(jobId:string):Observable<any>{
    const url = environment.BASE_URL+"jobs/"+jobId;
    return this.http.delete<any>(url);
   }

}
