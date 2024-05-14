import { Component, OnInit } from '@angular/core';
import { ServiceService } from './services/service.service';
import { CurrentObservation } from 'src/models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'wether-app';
  inputValue='';
  temprature='';
  pressure='';
  wind='';
  humidity='';
  response:any;
  //current_observation:any;
  current_observation: CurrentObservation | undefined;

  
  //injecting the service inside the constructor
constructor(private ServiceSevice:ServiceService){
  

}

  ngOnInit(): void {
    //this.inputValue='chennai'

  }
  
  onSubmit(){
    console.log( this.inputValue);
    this.ServiceSevice.getWeatherData(this.inputValue)
    .subscribe({
      next:(response:any)=>{
        this.response=response;
        this.temprature=response.current_observation.condition.temperature
        //return this.temprature;
        //console.log(temprature);
        console.log(response);
        console.log(this.current_observation?.condition.temperature);
        this.pressure=response.current_observation.atmosphere.pressure;
        console.log(this.pressure)
      }
    })
  //   this.ServiceSevice.getObservation().subscribe({
  //     next: (observation: CurrentObservation) => {
  //       this.current_observation = observation;
  //   }
  // })
  }
}




