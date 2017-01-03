import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Headers, Http, Response } from '@angular/http';
import { Alumnos } from '../alumnos';
import { AlumnosService } from '../alumnos.service';

@Component({
  selector: 'app-alumnoid',
  templateUrl: './alumnoid.component.html',
  styleUrls: ['./alumnoid.component.scss']
})
export class AlumnoidComponent implements OnInit {

  	@Input() alumno;

  	@Input() name: string = "Iparra";




    constructor(
   	private http: Http,private alumnosService:AlumnosService ,private route: ActivatedRoute,
     private router: Router) {}


  ngOnInit() {

  	      	console.log('nombre,,,,,',name)


        // Recogemos los parametros de la URL
         this.route.params.subscribe(params => {
            if(params['id']!=null){
               console.log('Param',params['id']) 

				this.alumnosService.getAlumno(parseInt(params['id']))
				//.then(alumno => this.alumno=alumno);
				.then(alumno => console.log(typeof(alumno)));
				}
           
         });
  }

}
