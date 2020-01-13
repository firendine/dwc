import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/alumno.modelo';
@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})
export class ViewmodeloComponent implements OnInit {

  alumno1:Alumno = new Alumno (1, 'Juan', 'Gutiérrez', 'Madrid');
  curso: number =125;

verCurso(){
  this.curso++;
return this.curso;
}

  constructor() { }

  ngOnInit() {
  }

}
