import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultLink = 'recipe';
  title = 'ChefOnline';

  onNavigate(link: string) {
    this.defaultLink = link;
  }
}
