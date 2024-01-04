import { NgModule } from "@angular/core";
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule } from "@angular/material/sort";

@NgModule({
    imports:[
    MatTableModule,
    MatInputModule, 
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
],
    exports:[
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    ]
})
export class MaterialModule {}