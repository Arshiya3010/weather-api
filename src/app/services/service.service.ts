import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/assets/environment/environmet';
import { WeatherData } from 'src/models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  location:string='';
  temprature='';
  pressure='';
  humidity='';
  wind='';

  //injecting the HttpCleint into the service
  constructor(private http:HttpClient) { }

//creating a function to get the weather data
  getWeatherData(cityName:string):Observable<WeatherData>{

    //getting the environment
    //get method
    //set method to set the headers
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl,{
      //passing the headers
      headers:new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
      params:new HttpParams()
      .set('location',cityName)
      .set('u','f')
      .set('format','json')
    })
  }
  getObservation(){
  
  }
}
