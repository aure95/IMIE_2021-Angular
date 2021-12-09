import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WheatherService {

  constructor(private httpClient: HttpClient) { }

  public getCurrentWheater(city : string) : Observable<any> {
    var params = {q: city, appid: environment.apiKey};
    return this.httpClient.get<any>(environment.apiWheatherUri, {params: params});
  }

  // public getCurrentWheatherMock(city: string) : string {
  //   console.log(environment.apiWheatherUri);
  //   return 'passed by mock';
  // }

  
}
