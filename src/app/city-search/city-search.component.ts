import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ConnectableObservable } from 'rxjs';


@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent implements OnInit {

  @Input() options!: string[];
  @Input() selectedCity?: string ="";
  @Output() onEventCityChange: any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public selectedCityChange(event: any) {
     this.onEventCityChange.emit({citySelected : event.value});
    
  }



}
