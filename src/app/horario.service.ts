import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HorarioService {

  constructor(private http : Http){
  }



    getHeroes(): Promise<Hero[]> {
    return this.http
      .get(`http://localhost:2000/horario/2/`)
      .toPromise()
      .then(response => response.json())

  }





}
