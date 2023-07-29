import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city-results-list',
  templateUrl: './city-results-list.component.html',
  styleUrls: ['./city-results-list.component.scss']
})
export class CityResultsListComponent {

  @Input() cities: any[] = [];
}
