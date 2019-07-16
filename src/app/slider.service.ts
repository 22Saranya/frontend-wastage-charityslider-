import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private http : HttpClient) { }

  getAllCharities():Observable<any>{
    return this.http.get('http://localhost:8070/api/v1/charity-slider');
  }
}
