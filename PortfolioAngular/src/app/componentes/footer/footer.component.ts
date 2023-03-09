import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {

  // AÑO FOOTER //  
  currentYearLong(): number {
    return new Date().getFullYear();
    }

  
  // BOTÓN ARRIBA //
  isShow?: boolean;
  topToStartShowing = 100;

  @HostListener('window:scroll', [])
  checkScroll(){

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if(scrollPosition >= this.topToStartShowing){
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  goToTop(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  
}
