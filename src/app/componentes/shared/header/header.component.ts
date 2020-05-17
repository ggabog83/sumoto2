import { Component } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  
})
export class HeaderComponent {
  constructor(private authService: AuthService,
    private router: Router) {
  }

  salir(){
    this.authService.cerrarSesion();
    this.router.navigateByUrl("/login");
  }
}