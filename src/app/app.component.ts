import { Component,OnInit } from '@angular/core';
import { WeatherService } from "./weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  message:string;
  constructor(private data:WeatherService){}
  ngOnInit(){
    this.data.currentMessage.subscribe(message => this.message = message)
  }

}


