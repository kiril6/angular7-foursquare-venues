import { Component, OnInit } from '@angular/core';
import { DataGetService } from './shared/data-get.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dataGetService: DataGetService) { }
 
  ngOnDestroy() {
    this.dataGetService.data;

  }

}

