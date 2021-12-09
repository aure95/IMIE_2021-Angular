import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent implements OnInit {

  @Input() options!: string[];
  @Output() selectedCityChange = new EventEmitter();
  selectedCity?: string;

  constructor() { }

  ngOnInit(): void {
  }



}
