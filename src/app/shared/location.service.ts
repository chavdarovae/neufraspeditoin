import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LocationService {
	urlPrefix = isDevMode() ? '../../' : './';

	constructor(private http: HttpClient) { }

	getLocationDetails(location: string) {
		return this.http.get(`${this.urlPrefix}assets/files/locations/${location}.xlsx - ${location}.csv`, { responseType: 'text' });
	}
}
