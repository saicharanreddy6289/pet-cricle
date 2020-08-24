/*
 * Created by
 * Kadambur Srikanth Vishaali ( B00821049)
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';

export interface MissingPets {

  pet_id: number,
  name: string,
  age: number,
  description: string,
  gender: string,
  category: string,
  color: string,
  breed: string,
  image: string
}


@Injectable({
  providedIn: 'root'
})

export class MissingService {


  fetchMissingPetsURL: string = BASE_URL.BLUE_NOSE + '/missing';

  constructor(private http: HttpClient) { }

  fetchMissingPets() {
    return this.http.get(this.fetchMissingPetsURL);
  }

  filterMissingPets(params): Observable<any> {
    return this.http.post<any>(this.fetchMissingPetsURL, params);
  }

}
