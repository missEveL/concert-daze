
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ConcertSpectService {

  constructor(private http: HttpClient) {
         this.getJSON()
         .subscribe(data => console.log(data),
           error => console.log(error));
    }

    public getJSON(): Observable<any> {
         return this.http.get("assets/concert-data.json");

     }

     public getImagePath(concertSpectId: number): string {
          return `assets/images/${concertSpectId - 1}`;

      }
}
