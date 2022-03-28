import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LocationService {

	constructor(private http: HttpClient) { }

	getLocationDetails(location: string) {
		return this.http.get(`../../assets/files/locations/${location}.xlsx - ${location}.csv`, { responseType: 'text' });
	}
}
