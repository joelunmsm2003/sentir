import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DatePicker } from 'ng2-datepicker-master/ng2-datepicker';
import { AppComponent } from './app.component';
import { AlertaComponent } from './alerta/alerta.component';
import { HomeComponent } from './home/home.component';
import { RouterModule }   from '@angular/router';
import { PlanificacionComponent } from './planificacion/planificacion.component';
import { ControlComponent } from './control/control.component';
import { PsicoComponent } from './psico/psico.component';
import { EstimulacionComponent } from './estimulacion/estimulacion.component';
import { GinecoComponent } from './gineco/gineco.component';
import { TamizajeComponent } from './tamizaje/tamizaje.component';
import { CancerComponent } from './cancer/cancer.component';




@NgModule({
  declarations: [
    AppComponent,
    AlertaComponent,
    DatePicker,
    HomeComponent,
    PlanificacionComponent,
    ControlComponent,
    PsicoComponent,
    EstimulacionComponent,
    GinecoComponent,
    TamizajeComponent,
    CancerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'planificacion',
        component: PlanificacionComponent
      },
      {
        path: 'control',
        component: ControlComponent
      },
      {
        path: 'psico',
        component: PsicoComponent
      },
      {
        path: 'estimulacion',
        component: EstimulacionComponent
      },
      {
        path: 'gineco',
        component: GinecoComponent
      },
      {
        path: 'tamizaje',
        component: TamizajeComponent
      }
      ,
      {
        path: 'cancer',
        component: CancerComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
