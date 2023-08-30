import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private http: HttpClient) { }

  DisplayMsg() {
    return "I am Angular 15 service";
  }

  GetPokemonData() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=1010&offset=0')
    /* .subscribe((data: any) => {
      console.log(data);
    }, (error: any) => {
      console.error('Error:', error);
    }); */
    /* .subscribe({
      next: (data: any) => console.log(data),
      error: (e: any) => console.error(e),
    }) */
  }
}