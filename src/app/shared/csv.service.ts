import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CsvService {
	urlPrefix = isDevMode() ? '../../' : './';

	constructor(private http: HttpClient) { }

	getLocationDetails(location: string) {
		return this.http.get(`${this.urlPrefix}assets/files/locations/Personal.xlsx - ${location}.csv`, { responseType: 'text' });
	}

	getPositionsList(language: 'DE' | 'EN' | string) {
		return this.http.get(`${this.urlPrefix}assets/files/carreer/Career.xlsx - ${language}.csv`, { responseType: 'text' });
	}

	getLocationList() {
		return this.http.get(`${this.urlPrefix}assets/files/locations/Locations.xlsx - coordinates.csv`, { responseType: 'text' });
	}
}
