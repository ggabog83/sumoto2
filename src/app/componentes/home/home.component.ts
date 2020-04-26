import { Component, OnInit } from '@angular/core';
import{HomeService,Home} from '../../servicios/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  home:Home = null;
  constructor(private _homeService:HomeService) { }

  ngOnInit():void {
    this.home = this._homeService.getHome();
  }
}





