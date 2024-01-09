import { Component, ViewChild } from '@angular/core';
import { PokemonServiceService } from '../service/pokemon-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  lst!: MatTableDataSource<any>;
  public columnas: string[] = [ 'position', 'name', 'image'];
  data:any[]=[]
  @ViewChild('MatPaginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
constructor(public servicepokemon: PokemonServiceService) {
  this.getpokemon();
}

getpokemon(){
  let pokemonData;
  for(let i = 1; i <= 30; i++){
  this.servicepokemon.getPokemon(i).subscribe(response=>{ 
    console.log(response) 
    const types: string[] =  response.types.map((type: any) => type.type.name);
    pokemonData= {
      position: i,
      name: response.name,
      image: response.sprites.front_default,
      image2: response.sprites.back_default,
      abilities: response.abilities,
      types: types
    };
      this.data.push(pokemonData)
      this.lst =  new MatTableDataSource(this.data);
      this.lst.paginator = this.paginator;
      this.lst.sort = this.sort;
      
    },
    err=>{
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
