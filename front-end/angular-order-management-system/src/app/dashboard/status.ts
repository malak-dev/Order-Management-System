import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable()
export class Status {


  constructor(private http: HttpClient) { }

  fetchStatusWorking(): Observable<Object> {
    return this.http.get('http://localhost:3000/orders?Status=Working')
  }

  fetchStatusNew(): Observable<Object> {
    return this.http.get('http://localhost:3000/orders?Status=New')
  }
}
