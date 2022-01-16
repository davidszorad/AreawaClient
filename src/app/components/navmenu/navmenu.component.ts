import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
  isLogged: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLogged = false;
    if (this.authService.isLoggedIn()) {
      this.isLogged = true;
    }
  }

}
