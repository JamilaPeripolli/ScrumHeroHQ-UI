import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Scrum Hero HQ';
  greeting = {'teste':'teste'};

  constructor(private http: HttpClient) {
  //  http.get('http://localhost:8080/resource').subscribe(data => this.greeting = data);
  }

}
