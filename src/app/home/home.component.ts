import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  Error:any;
  userData: any;
  constructor(private ds: DataService, private route: Router) {}

  ngOnInit() {
    // Retrieve user data from UserDataService
    this.userData = this.ds.getUserData();
  }
}
