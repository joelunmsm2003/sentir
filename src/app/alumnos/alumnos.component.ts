import { Component, OnInit } from '@angular/core';
import { Alumnos, Hero } from '../hero';
import { Headers, Http, Response } from '@angular/http';
import { AlumnosService } from '../alumnos.service';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {

	alumnos: Alumnos[] = [];

    constructor(
   	private http: Http,private alumnosService:AlumnosService) {}

  ngOnInit(): void {
    this.alumnosService.getAlumnos()
      .then(data => 

      	this.alumnos = data


      	);
  }


}
