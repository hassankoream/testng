import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, AboutComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstapp';
}
