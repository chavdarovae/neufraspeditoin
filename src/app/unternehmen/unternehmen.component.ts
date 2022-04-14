import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, isDevMode, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CsvService } from '../shared/csv.service';

@Component({
	selector: 'app-unternehmen',
	templateUrl: './unternehmen.component.html',
	styleUrls: ['./unternehmen.component.scss']
})
export class UnternehmenComponent implements OnInit, AfterViewInit {
	urlPrefix = isDevMode() ? '../../' : './';
	docuList: any[] = [];
	downloadUrlPrefix = isDevMode() ? '../../assets/files/documents/' : 'https://github.com/chavdarovae/new-website/tree/gh-pages/assets/files/documents/';

	constructor(
		private scroller: ViewportScroller,
		private activatedRoute: ActivatedRoute,
		private csvService: CsvService
	) { }

	ngOnInit(): void {
		this.csvService.getDocumentList().subscribe(data => {
			this.docuList = data.split('\r\n');
			this.docuList.shift();
			this.docuList = this.docuList.map((x: string )=> x.split(','));
		});
	}

	ngAfterViewInit() {
		this.activatedRoute.queryParams.subscribe(params => {
            if (params['goToSection']) {
				this.scroller.scrollToAnchor(params['goToSection']);
            }
        });
	}
}
