import { NgModule } from "@angular/core";
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule } from "@angular/material/sort";
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports:[
    MatTableModule,
    MatInputModule, 
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
],
    exports:[
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    ]
})
export class MaterialModule {}