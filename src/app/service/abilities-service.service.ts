import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AbilitiesServiceService {

  url = "https://pokeapi.co/api/v2/ability";

  constructor(private http: HttpClient) { }

  getAbilities(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  getAbilityDetailsArray(abilityIds: number[]): Observable<any[]> {
    const abilities: Observable<any>[] = abilityIds.map(abilityId => {
      return this.getAbilities(abilityId).pipe(
        catchError(error => {
          console.error(`Error al obtener habilidad ${abilityId}:`, error);
          throw error;
        })
      );
    });

    return forkJoin(abilities).pipe(
      map(results => {
        return results;
      })
    );
  }
}