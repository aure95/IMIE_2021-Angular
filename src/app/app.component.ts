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

  constructor(private wheatherService: WheatherService) {
  }

  public onClickGetWheatherData() {

      this.wheatherService.getCurrentWheater('London').pipe().subscribe((data: any) => this.wheatherData = data );
      // this.wheatherData = this.wheatherService.getCurrentWheatherMock('London');
      console.log(this.wheatherData);
  }
}
