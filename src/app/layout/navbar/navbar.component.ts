import { Component, OnInit } from '@angular/core';

declare var $;

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
    $(() => {
      $('.toggle').on('click', () => {
        if ($('.item').hasClass('active')) {
          $('.item').removeClass('active');
          $(this).find('a').html('<i class="fas fa-times"></i>');
        } else {
          $('.item').addClass('active'); $(this).find('a').html('<i class="fas fa-times"></i>');
        } });
    });
  }

}
