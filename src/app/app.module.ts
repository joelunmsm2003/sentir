import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { NavcoleComponent } from './navcole/navcole.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnosService } from './alumnos.service';
import { AlumnoidComponent } from './alumnoid/alumnoid.component'


@NgModule({
  declarations: [
    AppComponent,
    NavcoleComponent,
    AlumnosComponent,
    AlumnoidComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'alumnos',
        component: AlumnosComponent
      },
      {
        path: 'alumno/:id',
        component: AlumnoidComponent
      }
    ])
  ],
  providers: [AlumnosService],
  bootstrap: [AppComponent]
})
export class AppModule { }