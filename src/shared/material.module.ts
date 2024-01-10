import { NgModule } from "@angular/core";
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule } from "@angular/material/sort";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    imports:[
    MatTableModule,
    MatInputModule, 
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
],
    exports:[
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    ]
})
export class MaterialModule {}