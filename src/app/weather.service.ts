import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class WeatherService {

  private key: any;
  private messageSource = new BehaviorSubject<any>("");
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { 

    this.key="&APPID=eff950955e5931408dbc9d1a8c8b74ef";

  }

  changeMessage(message: {"stuff":"things"}){
  	this.messageSource.next(message)
  }

  getCity(city,cb){
  
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + this.key;
    this.http.get(url)
    .subscribe(data=>cb(data))
  }



}
