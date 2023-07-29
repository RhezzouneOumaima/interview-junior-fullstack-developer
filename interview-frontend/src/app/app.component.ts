import { Component } from '@angular/core';
import { CityService } from './city.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchTerm: string = "";
  cities: any = [];
  searched = false;
  n:any;

  constructor(private cityService: CityService) {}

  searchCity(): any {
    if (!this.searchTerm) {
      return;
    }

    this.cityService.searchCities(this.searchTerm)
      .subscribe(
        (data) => {
          this.cities = Array.from(Object.values(data));
          this.searched = true;
        },
        (error) => {
          console.error(error);
          this.cities = [];
          this.searched = true;
        });
  }
}
