import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  id : any = 123456789;
  constructor(private router : Router) { }

  redirectTo(){
    this.router.navigate(['/','tabs','nudo',this.id])
  }

}
