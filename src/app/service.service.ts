import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getallData(){
    return this.http.get("http://localhost:3000/PluralTask")
    .pipe(catchError(this.errorHandler)
    )
  }
  postdata(data:any){
    return this.http.post("http://localhost:3000/pluralTask",data)
  }
  idbasedupdate(data:any){
    return this.http.put("http://localhost:3000/PluralTask/" + data.id,data)
  }
  idbaseddelete(id:any){
    return this.http.delete("http://localhost:3000/pluralTask/" +id)
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }

}
