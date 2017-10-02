import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'aet-card',
  templateUrl: './aet-card.component.html',
  styleUrls: ['./aet-card.component.scss']
})
export class AetCardComponent implements OnInit {

	@Input() settings : Object;

	// Settings must be in this format

	// {
	// 	content: string,
	// 	header: string,
	// 	buttons: boolean,
	// 	button1: string,
	// 	button2: string,
	// 	theme: string
	// }

	private mainClass		: string;
	private headerClass		: string;
	private contentClass	: string;
	private buttonsClass	: string;

  constructor() { }

  ngOnInit() {
	this.settings = {
		content: "This is some content",
		header: "This is a header",
		buttons: true,
		button1: "Button 1",
		button2: "Button 2",
		theme: "basic"
	}
  }

}
