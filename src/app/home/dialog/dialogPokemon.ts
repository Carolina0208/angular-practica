import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { PokemonServiceService } from "src/app/service/pokemon-service.service";

import { MatDialog } from '@angular/material/dialog';
import { DialogAbilitiesComponent } from "../dialogAbilities/dialogAbilities";

@Component({
    templateUrl: 'dialogPokemon.html',

})
export class DialogPokemonComponent implements OnInit{
    public lst :any[]=[];

    constructor(
        public dialogref: MatDialogRef<DialogPokemonComponent>,
        public pokemonservice: PokemonServiceService,
        @Inject(MAT_DIALOG_DATA) public data :any,
        public dialog: MatDialog,
    ) {




    }
    ngOnInit(): void {
       this.getpokemon(); 
    }

    getpokemon(){
        let pokemonData;
        this.pokemonservice.getPokemon(this.data).subscribe(response=>{
            const position: number = response.position;
            const types: string[] =  response.types.map((type: any) => type.type.name);
            const abilities: string[] = response.abilities.map((ability: any)=>ability.ability.name);
            const abilityIds: number[] = response.abilities.map((ability: any) => {
              const urlParts = ability.ability.url.split('/');
              return parseInt(urlParts[urlParts.length - 2], 10);
            });
            pokemonData= {              
              name: response.name,
              image: response.sprites.front_default,              
              abilityIds: abilityIds,
              abilities: abilities,
              position : position
            };
              this.lst.push(pokemonData)
            },
            err=>{
              console.log("ERROR")
            }             
        )
    }
    
    openAbilitiesDialog(abilityIds: number) {
      const dialogref = this.dialog.open(DialogAbilitiesComponent, {
        data: abilityIds,
        width: '50%',
      });
    }

    cerrar(){
        this.dialogref.close();
    }
}