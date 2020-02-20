import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mla-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My Lazy App';
  color: string;

  ngOnInit() {
    this.color = '#FF5733';
  }
}
