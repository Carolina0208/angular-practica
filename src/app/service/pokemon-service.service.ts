import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

   url = "https://pokeapi.co/api/v2";

  constructor(private http:HttpClient) { }

getPokemon(id:number){
  return this.http.get<any>(`${this.url}/pokemon/${id}`)
  
}

}
