import { Component, isDevMode, OnInit } from '@angular/core';
import { locationList } from 'src/assets/files/loactions';

@Component({
	selector: 'app-standorte',
	templateUrl: './standorte.component.html',
	styleUrls: ['./standorte.component.scss']
})
export class StandorteComponent implements OnInit {
	mapLat = 48.5;
	mapLng = 13.6880;
	mapZoom = 5.5;
	mapStyle: any;
	locations = locationList;
	urlPrefix = isDevMode() ? '../../' : './';
	mapMarkerIcon = {
		url: this.urlPrefix + 'assets/icons/loc.svg', 
		labelOrigin: {x: 15, y: 30}, 
		scaledSize: { width: 25, height: 25}
	}
	

	constructor() { }

	ngOnInit(): void {
		if (window.innerWidth < 500) {
			this.mapLat = 50.3;
			this.mapLng = 10;
			// this.mapZoom = 6;
		}
		
		this.mapStyle = [
			{
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "administrative.country",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#007032"
					},
					{
						"visibility": "on"
					},
					{
						"weight": 8
					}
				]
			},
			{
				"featureType": "administrative.country",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#007032"
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "administrative.country",
				"elementType": "labels.icon",
				"stylers": [
					{
						"color": "#ff3def"
					}
				]
			},
			{
				"featureType": "administrative.country",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#007032"
					},
					{
						"visibility": "off"
					},
					{
						"weight": 6.5
					}
				]
			},
			{
				"featureType": "administrative.country",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "administrative.land_parcel",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "administrative.land_parcel",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "administrative.neighborhood",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "administrative.province",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ff8b3d"
					}
				]
			},
			{
				"featureType": "administrative.province",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ff8b3d"
					},
					{
						"visibility": "on"
					},
					{
						"weight": 2.5
					}
				]
			},
			{
				"featureType": "administrative.province",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#ff8b3d"
					}
				]
			},
			{
				"featureType": "poi",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "transit",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			}
		];
	}

}
