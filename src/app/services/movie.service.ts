import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = environment.serverUrl;

  constructor(private http: HttpClient) { }

  getMovies(type: string) {
    console.log('services call', type);
    return this.http.get<any[]>(`${this.url}/trending/${type}/week?language=id`);
  }

  getMovieDetail(type: string, id: string) {
    return this.http.get<any[]>(`${this.url}/${type}/${id}?language=id`);
  }
}
