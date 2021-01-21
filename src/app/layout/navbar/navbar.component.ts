import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public name = '[Tascón, Andrés]';
  public profession = '/*** Software developer ***/';
  public acerca = '{ Acerca }';
  public experiencia = '{ Experiencia }';
  public proyectos = '{ Proyectos }';
  public contacto = '{ Contacto }';

  constructor() { }

  ngOnInit(): void {
  }

}
