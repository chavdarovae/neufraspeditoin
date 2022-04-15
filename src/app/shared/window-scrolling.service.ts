import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class WindowScrollingService {
	private styleTag: HTMLStyleElement;

	constructor() {
		this.styleTag = this.buildStyleElement();
	}

	public enable() {
		document.body.removeChild(this.styleTag);
	}

	public disable() {
		document.body.appendChild(this.styleTag);
	}

	private buildStyleElement(): HTMLStyleElement {
		var style = document.createElement('style');
		style.type = 'text/css';
		style.setAttribute('data-debug', 'Injected by window scolling service');
		style.textContent = `
			body {
				overflow: hidden !important;
			}
		`;

		return (style);
	}
}
