import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonServiceService } from '../service/pokemon-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-pokemones',
  templateUrl: './tabla-pokemones.component.html',
  styleUrls: ['./tabla-pokemones.component.css']
})
export class TablaPokemonesComponent {
  lst!: MatTableDataSource<any>;
  public columnas: string[] = ['position', 'name', 'image'];
  data: any[] = []
  @ViewChild('MatPaginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public servicepokemon: PokemonServiceService,
    public router: Router) {
    this.getpokemon();
  }

  getpokemon() {
    let pokemonData;
    for (let i = 30; i <= 60; i++) {
      this.servicepokemon.getPokemon(i).subscribe(response => {
        console.log(response)
        const types: string[] = response.types.map((type: any) => type.type.name);
        pokemonData = {
          position: i,
          name: response.name,
          image: response.sprites.front_default,
          image2: response.sprites.back_default,
          abilities: response.abilities,
          types: types
        };
        this.data.push(pokemonData)
        this.lst = new MatTableDataSource(this.data);
        this.lst.paginator = this.paginator;
        this.lst.sort = this.sort;

      },
        err => {
          console.log("ERROR")
        }
      )
    }

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.lst.filter = filterValue.trim().toLowerCase();

    if (this.lst.paginator) {
      this.lst.paginator.firstPage();
    }
  }
}
