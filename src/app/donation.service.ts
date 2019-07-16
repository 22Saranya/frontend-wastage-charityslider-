import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http: HttpClient) { }



gettracksurl : string = "http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=7d6e67fa3d63711e20bc33161a317f6d&format=json";

 getAllTracks()
 {
   console.log("Hitting Services");
   return this.http.get<any>(this.gettracksurl);
 }

 saveRestaurant(restaurant){
   var saveRestaurantUrl= "http://localhost:8080/api/v1/restaurant-profile/";
   console.log("Saving Restaurant", restaurant);
   return this.http.post<any>(saveRestaurantUrl,restaurant);
 }

 saveCharity(charity){
  var saveCharityUrl= "http://localhost:8080/api/v1/charity-profile/";
  console.log("Saving Charity", charity);
  return this.http.post<any>(saveCharityUrl,charity);
}
}