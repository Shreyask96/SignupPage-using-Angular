import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // Import RouterOutlet for displaying routes

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],  // Only import RouterOutlet
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
}
