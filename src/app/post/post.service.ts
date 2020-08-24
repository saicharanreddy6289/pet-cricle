import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';
import Swal from 'sweetalert2';

export interface postPets {

  name: string,
  gender: string,
  age: number,
  breed: string,
  color: string,
  phoneno: number, 
  email: string, 
  category: string,  
  desc: string
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  post_missingURL: string = BASE_URL.BLUE_NOSE + '/postMissingPets';
  post_AdoptionURL: string = BASE_URL.BLUE_NOSE + '/postAdoptionPets';
  post_PlaytimeURL: string = BASE_URL.BLUE_NOSE + '/postPlaytimePets';

  constructor(private http: HttpClient) { }

  postMissingPets(params) {
    console.log("into post missing pets service");
    return this.http.post<any>(this.post_missingURL, params); 

  }

  postAdoptionPets(params): Observable<any> {
    return this.http.post<any>(this.post_AdoptionURL, params);
  }

  postPlaytimePets(params): Observable<any> {
    return this.http.post<any>(this.post_PlaytimeURL, params);
  }
}
