import { Component, OnInit } from '@angular/core';

@Component({
	// tslint:disable-next-line:component-selector
	selector: 'body[kt-root]',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'Metronic';

	constructor() { }

	ngOnInit(): void {
	}

}
