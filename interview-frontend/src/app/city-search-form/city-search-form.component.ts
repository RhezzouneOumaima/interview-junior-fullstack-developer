import { Component,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-city-search-form',
  templateUrl: './city-search-form.component.html',
  styleUrls: ['./city-search-form.component.scss']
})
export class CitySearchFormComponent {

  cityName: string = '';

  @Output() searchCity = new EventEmitter<string>();

  onSubmit() {
    this.searchCity.emit(this.cityName);
  }
}
