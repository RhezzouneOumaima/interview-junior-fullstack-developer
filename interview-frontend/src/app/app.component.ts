import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interview-frontend';
  searchResults: any[] = []; // Assuming searchResults is an array of any type

  onSearchCity(cityName: string) {
    console.log('Received city name from child component:', cityName);
    // Perform any other actions with the emitted data here.
  }
 
}
