import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../weather.service";
import {CityComponent} from '../city/city.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit{

  public message: {"things":"with stuff"};
  private city:any;

  constructor(private ws: WeatherService){}

  ngOnInit(){

  	this.ws.currentMessage.subscribe(message => this.message = message)
  
  }

  newMessage(location){

  	this.ws.getCity(location, (data2)=>{
      
      switch (location){
        case "san jose":
          data2.img = "/assets/sanjose.jpg";
          break;
        case "seattle":
          data2.img = "/assets/seattle.jpg";
          break;
        case "burbank":
          data2.img = "/assets/burbank.jpg";
          break;
        case "dallas":
          data2.img = "/assets/dallas.jpg";
          break;
        case "washington":
          data2.img = "/assets/washington.jpg";
          break;
        case "chicago":
          data2.img = "/assets/chicago.jpg";  
          break;
        default:
          data2.img = "/assets/sanjose.jpg";
      }
  		this.ws.changeMessage(data2);
  	
    });

  }
}


