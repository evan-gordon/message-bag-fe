import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'message-bag';
  messages;

  constructor(private http: Http) {
    http.get('http://localhost:3000/messages.json')
      .subscribe(res => this.messages = res.json());
  }
}
