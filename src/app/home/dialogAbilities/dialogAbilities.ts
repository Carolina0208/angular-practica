import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AbilitiesServiceService } from "src/app/service/abilities-service.service";
import { catchError, forkJoin, Observable } from 'rxjs';

@Component({
  templateUrl: 'dialogAbilities.html',
})
export class DialogAbilitiesComponent implements OnInit {
  public lst: any[] = [];

  constructor(
    public dialogref: MatDialogRef<DialogAbilitiesComponent>,
    public abilitiesService: AbilitiesServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    this.getAbilities();
  }

  getAbilities() {
    const abilityIds: number[] = this.data;
    const abilitiesObservables: Observable<any>[] = abilityIds.map(abilityId => {
      return this.abilitiesService.getAbilityDetailsArray([abilityId]).pipe(
        catchError(error => {
          console.error(`Error obteniendo detalles de habilidad ${abilityId}:`, error);
          throw error;
        })
      );
    });

    forkJoin(abilitiesObservables).subscribe(response => {
      this.lst = response.flat();
      console.log(this.lst);
    });
  }

  cerrar() {
    this.dialogref.close();
  }
}