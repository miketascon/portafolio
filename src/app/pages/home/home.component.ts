import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public name = '{ Andres Tascón }';

  constructor() { }

  ngOnInit(): void {

    $(window).on('scroll', (): void => {
      if ($(window).scrollTop()) {
          $('.section').addClass('animate__animated animate__backInLeft');
          $('.image-perfil').addClass('animate__animated animate__backInLeft');
          $('.parrafo').addClass('animate__animated animate__backInLeft');
          $('.experiencia').addClass('animate__animated animate__backInLeft');
          $('.efect-rigth').addClass('animate__animated animate__backInRight');
          $('.efect-left').addClass('animate__animated animate__backInLeft');
          $('.proyectos').addClass('animate__animated animate__backInLeft');
          $('.contacto').addClass('animate__animated animate__backInUp');
      } else {
        $('nav').removeClass('animate__animated animate__backInLeft');
        $('.image-perfil').removeClass('animate__animated animate__backInLeft');
        $('.parrafo').removeClass('animate__animated animate__backInLeft');
        $('.experiencia').removeClass('animate__animated animate__backInLeft');
        $('.efect-rigth').removeClass('animate__animated animate__backInRight');
        $('.efect-left').removeClass('animate__animated animate__backInLeft');
        $('.proyectos').removeClass('animate__animated animate__backInLeft');
        $('.contacto').removeClass('animate__animated animate__backInUp');
      }
    });



  }

}
