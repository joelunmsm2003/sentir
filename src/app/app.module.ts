import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DatePicker } from 'ng2-datepicker-master/ng2-datepicker';
import { AppComponent } from './app.component';
import { AlertaComponent } from './alerta/alerta.component';



@NgModule({
  declarations: [
    AppComponent,
    AlertaComponent,
    DatePicker
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
