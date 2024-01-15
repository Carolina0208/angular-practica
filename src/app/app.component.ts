import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practica';
  constructor(public router: Router) {
    
  }
  rutaTabla(){
    this.router.navigate(['tablaPokemones']);
  }

  rutaHome(){
    this.router.navigate(['Home']);
  }
}

