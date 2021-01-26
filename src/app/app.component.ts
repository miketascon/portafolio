import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portafolio';

  public loading = '0';
  public estado = false;


  ngOnInit(): void {
    for (let index = 0; index <= 100; index++) {
      setTimeout(() => {
        this.loading = String(index);
        setTimeout(() => {
          if (this.loading === '100') {
            this.estado = true;
          } else {
           this.estado = false;
          }

        }, 1100);
      }, 1000);
    }


  }

}
