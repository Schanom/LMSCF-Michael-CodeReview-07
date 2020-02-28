import { Component, OnInit } from '@angular/core';
import { travels } from '../travel';

@Component({
	selector: 'travel-page',
	templateUrl: './travel-page.component.html',
	styleUrls: ['./travel-page.component.css']
})
export class TravelPageComponent implements OnInit {
	travels = travels;
	constructor() { }

	ngOnInit(): void {
	}

}
