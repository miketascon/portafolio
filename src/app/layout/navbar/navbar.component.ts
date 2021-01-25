import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

declare var $;



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public name = '[AT]';
  public profession = '/*** Software developer ***/';
  public acerca = '{ Sobre mi }';
  public experiencia = '{ Experiencia }';
  public proyectos = '{ Proyectos }';
  public contacto = '{ Contacto }';
  public buttonHeader = 'Resumen';
  public conocimiento = '{ Conocimiento }';

  private soundMenu = new Howl({
    src: ['/assets/sounds/scanner-1.mp3']
  });

  constructor() {

   }

  ngOnInit(): void {


    $(() => { $('.toggle').on('click', () => {
        if ($('.item').hasClass('active')) {
          $('.item').addClass('animate__animated animate__fadeOutLeft');
          setTimeout(() => {
            $('.item').removeClass('active animate__animated animate__fadeOutLeft');
          }, 500);
          $(this).find('i').html('<i class="fas fa-times"></i>');
        } else {
          $('.item').addClass('active animate__animated animate__fadeInLeft');
          $(this).find('i').html('<i class="fas fa-bars"></i>');
        }
      });
    });

    $(window).on('scroll', (): void => {
      if ($(window).scrollTop()) {
          $('nav').addClass('animate__animated animate__fadeOutUp');
          $('.arriba').addClass('display animate__animated animate__fadeIn');
      } else {
        $('nav').removeClass('animate__animated animate__fadeOutUp');
        $('.arriba').removeClass('display animate__animated animate__fadeOut');
      }
    });

    $(() => {
      $('.arriba').click(() => {
        $('body, html').animate({
          scrollTop: '0px'
        }, 300);
      });
    });

   /*  $(document).ready(() => {
      $('arriba').click(() => {
        $('body, html').animate({
          scrollTop: '0px'
        }, 300);
      });
      $(window).scroll(() => {
        if ( $(this).scrollTop() > 0 ){
          $('arriba').slideDown(300);
        } else {
          $('arriba').slideUp(300);
        }
      });
    }); */

  }

  touchSoundMenu(): void {
    this.soundMenu.play();
  }

  reload(): void{
    window.location.replace('#/pages/home');
  }

}
