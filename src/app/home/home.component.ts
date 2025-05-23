import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}

  about() {
    this.router.navigate(['about']);
  }
  services() {
    this.router.navigate(['service']);
  }
  projects() {
    this.router.navigate(['projects']);
  }
  contact() {
    this.router.navigate(['contact']);
  }
}
