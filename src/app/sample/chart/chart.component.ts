import { Component, OnInit } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

declare var L: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {  
  private mapContainer: any

  constructor() {}  

  ngOnInit(): void {    
    const map = L.map('map').setView([37.450593130752694, -0.09], 13);    
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
      }).addTo(map);

  const control = L.Routing.control({
      waypoints: [
        L.latLng(37.450593130752694, 127.07825736884718),
        L.latLng(37.448142762964785, 127.07766715658266),
        L.latLng(37.4454223956458, 127.07660207491823)
      ],
      routeWhileDragging: true
    }).addTo(map);
    
    control.on('routeselected', (e: any) => {
      const latlngs = e.route.coordinates;
      console.log(latlngs);
    });
  }

}
