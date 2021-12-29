import { Injectable } from '@angular/core';
import {Moviie} from "./series/Movie";
import {Episode} from "./series/Episode";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private apiUrl = 'http://localhost:1028/api/movies/';  // URL to web api

  getSeries(title:string):Observable <Moviie>{
    let s = this.http.get <Moviie>(this.apiUrl + title);
    return s
  }

  getEpisodes(title:string,season:number):Observable <Episode[]>{
    let s = this.http.get<Episode[]>(this.apiUrl + title + "/" + season);
    return s
  }

  constructor(private http: HttpClient) { }
}
