import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gyepes';
  diameter !:number;


  calArea() :void{
    let radius = this.diameter/2;
    let area = Math.pow(radius , 2)*Math.PI;
    alert ("Működik")
  }
}
