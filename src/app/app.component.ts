import { Component } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { count, map, of } from 'rxjs';
import { CityService } from './services/city.service';
import { WheatherService } from './services/wheather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WheaterApp';

  wheatherData: any;
  citiesData: any;
  options: string[] = ['London', 'Paris', 'Madrid'];
  selectedCity?: string;
  waitingData: boolean = false;
  citiesSelectable!: string[];
  private numberOfCitiesAvailable: number = 10000;
  

  constructor(private wheatherService: WheatherService, private cityService : CityService) {
  }

  ngOnInit() {
   // this.cityService.getCities().pipe().subscribe((data: any) => this.citiesData = data);
    // if (this.citiesSelectable == undefined) {
    //   this.citiesSelectable = this.options;
    // }
    // this.selectedCity = this.citiesSelectable[Math.floor(Math.random() * this.citiesSelectable.length)];
  }

  public onClickRefreshCitiesSelectable(): void {
    // this.retrieveWheatherDataFromSelectedCity();
    // .reduce((acc:[], x:[]) => (acc.concat(x)) )
    this.cityService.getCities().pipe().subscribe((data: any) => this.citiesData = data);
    console.log(this.citiesData);
    this.citiesData = this.citiesData['data'].map((x : any) => x.cities).reduce((acc:[], x:[]) => acc.concat(x));
    this.citiesData = this.citiesData.slice(0, this.numberOfCitiesAvailable);
    console.log(this.citiesData);
    this.options = this.citiesData;
  }

  public retrieveWheatherDataFromSelectedCity(): void {
    if (this.selectedCity != undefined) {
      this.waitingData = true;
      this.wheatherService.getCurrentWheater(this.selectedCity).pipe().subscribe((data: any) => this.wheatherData = data );
      this.waitingData = false;
    }
  }

  // public onSelectedCity(event : any) {
  //   console.log("hola");
  // }
  public onCityChange(event: any) {
    this.selectedCity = event.citySelected;
    this.retrieveWheatherDataFromSelectedCity();
  }
}
