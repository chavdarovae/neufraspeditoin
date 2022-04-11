import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, isDevMode } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
	urlPrefix = isDevMode() ? '../../' : './';
	baseUrl = environment.urlNeufra;

	constructor(private scroller: ViewportScroller) {}

	ngAfterViewInit(): void {
		this.scroller.scrollToPosition([0,0])
	}
}
