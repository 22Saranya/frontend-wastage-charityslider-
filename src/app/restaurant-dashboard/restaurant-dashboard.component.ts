import { Component, OnInit } from '@angular/core';
// import * as CanvasJS from '../../assets/js/canvasjs.min';
@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css']
})
export class RestaurantDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  openDonationModal(){
    document.getElementById('donationModal').style.display="block";
  }

  closeDonationModal(){
    document.getElementById('donationModal').style.display="none";
  }
  
}
