import { Component,OnInit } from '@angular/core';
import { WeatherService } from "./weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private message:any;
  constructor(private ws:WeatherService){}
  ngOnInit(){
    this.ws.currentMessage.subscribe(message => this.message = message)
  }

}


