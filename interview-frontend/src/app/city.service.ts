import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private apiUrl = 'http://localhost:3000/search';

  constructor(private http: HttpClient) {}

  searchCities(cityName: string): Observable<any> {
    const url = `${this.apiUrl}/${cityName}`;
    return this.http.get<any>(url);
  }
}
