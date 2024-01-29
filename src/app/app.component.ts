import { Component, Injectable } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wsearch';

  constructor(private wikipediaService: WikipediaService) {}

  onTerm(term: string) {
    const results = this.wikipediaService.search(term);
    console.log(results);
  }
}
