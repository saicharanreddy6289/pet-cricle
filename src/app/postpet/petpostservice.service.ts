import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetpostserviceService {

  constructor(private http: HttpClient) { }

  // post request to add pet details to the database
  addpet(petdata: any) {
    console.log("posted");
    console.log(petdata);

    return this.http.post(BASE_URL.BLUE_NOSE + '/postpet/postpets', petdata);

  }
  // get request to fetch details from the database
  getpets(userId) {
    return this.http.get(BASE_URL.BLUE_NOSE + '/postpet/getpets?userId=' + userId);

  }
}
