import { Component } from '@angular/core';
import { WheatherService } from './services/wheather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WheaterApp';

  wheatherData: any;
  options: string[] = ['London', 'Paris', 'Madrid'];
  selectedCity?: string;
  waitingData: boolean = false;
  

  constructor(private wheatherService: WheatherService) {
  }


  public onClickGetWheatherData(): void {
    this.retrieveWheatherDataFromSelectedCity();
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
