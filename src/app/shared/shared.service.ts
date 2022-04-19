import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SharedService {
	private infoSeen$ = new BehaviorSubject<boolean>(false);
	locationInfoSeen$ = this.infoSeen$.asObservable();

	constructor() {
	}

	setLocationInfoSeen(val: boolean) {
		this.infoSeen$.next(val);
	}
}
