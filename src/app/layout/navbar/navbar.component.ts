import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

declare var $;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public name = '[(AT)]';
  public profession = '/*** Software developer ***/';
  public acerca = '{ Acerca }';
  public experiencia = '{ Experiencia }';
  public proyectos = '{ Proyectos }';
  public contacto = '{ Contacto }';
  public buttonHeader = 'Hoja de vida';

  private soundMenu = new Howl({
    src: ['/assets/sounds/scanner-1.mp3']
  });

  constructor() { }

  ngOnInit(): void {

    $(() => { $('.toggle').on('click', () => { 
        if ($('.item').hasClass('active')) { 
          $('.item').removeClass('active'); 
          $(this).find('a').html('<i class="fas fa-times" aria-hidden="true"></i>'); 
        } else { 
          $('.item').addClass('active'); 
          $(this).find('a').html('<i class="fas fa-times" aria-hidden="true"></i>'); 
        } 
      }); 
    });

    
  }

  touchSoundMenu(): void {
    this.soundMenu.play();
  }

}
