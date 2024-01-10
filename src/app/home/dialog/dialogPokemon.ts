import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { PokemonServiceService } from "src/app/service/pokemon-service.service";

@Component({
    templateUrl: 'dialogPokemon.html',

})
export class DialogPokemonComponent implements OnInit{
    public lst :any[]=[];

    constructor(
        public dialogref: MatDialogRef<DialogPokemonComponent>,
        public pokemonservice: PokemonServiceService,
        @Inject(MAT_DIALOG_DATA) public data :any,
    ) {




    }
    ngOnInit(): void {
       this.getpokemon(); 
    }

    getpokemon(){
        let pokemonData;
        this.pokemonservice.getPokemon(this.data).subscribe(response=>{
            const types: string[] =  response.types.map((type: any) => type.type.name);
            const abilities: string[] =  response.abilities.map((ability: any) => ability.ability.url);
            pokemonData= {              
              name: response.name,
              image: response.sprites.front_default,              
              abilities: abilities,
            
            };
              this.lst.push(pokemonData)
              console.log(this.lst)
            },
            err=>{
              console.log("ERROR")
            }             
        )
    }

    cerrar(){
        this.dialogref.close();
    }
}