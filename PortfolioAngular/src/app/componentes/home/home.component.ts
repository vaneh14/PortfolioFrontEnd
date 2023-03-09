import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
 
  miPortfolio: any;

  constructor(private datosPortfolio:PortfolioService) {  }

  ngOnInit(): void {

    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.miPortfolio = data;
    });


    // EFECTO TYPEWRITER //
    const target = document.querySelector('.tw');

    const writer = new Typewriter(target, {
      loop: true,
      typeColor: '#D47AE8',
      deleteSpeed: 80
    })
    
    writer
      .type(' Full Stack Developer Jr ')
      .rest(600)
      .start()
  }

}