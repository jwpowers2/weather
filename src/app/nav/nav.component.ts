import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../weather.service";
//import { Injectable } from "@angular/core";
import {CityComponent} from '../city/city.component';
//import {ActivatedRoute, Params, Router} from "@angular/router";

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
  /*
  newMessage(){
  	this.ws.changeMessage(message)
  }
   

  
  private city: any;

  constructor(
              private ws:WeatherService,

             ) { }

  
  */

  newMessage(location){

  	//console.log(location);
  	this.ws.getCity(location, (data2)=>{
  		//this.city = data2;
  		//return this.city;
  		this.ws.changeMessage(data2);
  	});
  }
}


