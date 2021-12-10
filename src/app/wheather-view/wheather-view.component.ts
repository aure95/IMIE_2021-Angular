import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '../models/weather';

@Component({
  selector: 'app-wheather-view',
  templateUrl: './wheather-view.component.html',
  styleUrls: ['./wheather-view.component.scss']
})
export class WheatherViewComponent implements OnInit {

  @Input() wheatherData: any;
  

  constructor() { }

  ngOnInit(): void {
  }

  public getWeathers(wheatherData: any): Weather[] {
    let weathers: Weather[] = [];
    for (let weather of wheatherData.weather) {
      let weatherToCreate = new Weather()
      weatherToCreate.setIcon(weather.icon);
      weatherToCreate.description = weather.description;
      weathers.push(weatherToCreate);
    }
    return weathers;
  }

}
