import { Component, Injectable } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Injectable({ providedIn: 'root' })
export class Car {
  color = 'red';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wsearch';

  constructor(private car: Car, private wikipediaService: WikipediaService) {}

  onTerm(term: string) {
    const results = this.wikipediaService.search(term);
    console.log(results);
    console.log('My car has a color of', this.car.color);
  }
}

const car = new Car();
const wikipedia = new WikipediaService();
new AppComponent(car, wikipedia);
