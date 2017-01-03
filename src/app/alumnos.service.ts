import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Alumnos, Hero } from './hero';


@Injectable()
export class AlumnosService {

  constructor(private http : Http){}

    getAlumnos(): Promise<Alumnos[]> {
    return this.http
      .get(`http://localhost:2000/alumnos/`)
      .toPromise()
      .then(response => response.json())
  }

   getAlumno(id: number): Promise<Alumnos> {
    return this.getAlumnos()
      .then(data => data.find(alumnos => alumnos.id === id));
  }



}










