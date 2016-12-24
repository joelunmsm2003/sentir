import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { HorarioService } from './horario.service'
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[HorarioService]
})
export class AppComponent {
  title = 'app works!';
  heroes: Hero[] = [];



    constructor(
   	private http: Http,private horarioService:HorarioService) {}

  ngOnInit(): void {
    this.horarioService.getHeroes()
      .then(heroes => 

      	this.heroes = heroes


      	);
  }



}
