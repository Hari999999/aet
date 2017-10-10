import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  	private theme : string = "basic";
	private card1 = {
		content: "This is some contet",
		header: "Header for card 1",
		buttons: "true",
		button1: "Button 1",
		button2: "Button 2",
		theme: this.theme
	}
}
