import { Component } from '@angular/core';
import { DataGetService } from '../shared/data-get.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    nav {
      height: 52px;
    }  
    .navbar-default {
      background-color: rgba(0,0,0, 0.5);
    }
    .navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover {
      color: white!important;
      background-color: rgba(58,154,225,0.6);
    }
    .navbar-brand {
      background: rgba(55,66,136,0.5);
      color: white;
      font-weight: bold;
    }
    #home a {
      cursor: default!important;
    }
    .space {
      margin: 2px 5px 0 0;
    }
    .category.space {
      margin-left: 5px;
    }
    li .btn {
      margin-top: 2px;
    }
  `]
})
export class HeaderComponent {
  constructor(public dataGetService: DataGetService) { }

  goHome() {
    location.href = "/";
  }

}
