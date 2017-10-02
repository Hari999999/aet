import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { themes } from '../themes';



@Component({
  selector: 'aet-button',
  templateUrl: './aet-button.component.html',
  styleUrls: ['./aet-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AetButtonComponent implements OnInit {

  // INPUTS
  @Input() buttontext	: string;
  @Input() theme		: string;
  @Input() buttontype	: string;
  @Input() tabindex		: number;
  @Input() arialabel	: string;

  // VARIABLES
  private errorText : string;
  private types : Object = {
    "primary"   : true,
    "secondary" : true,
    "text"      : true,
    "warning"   : true,
    "loader"    : true,
  }

  constructor() { }

  ngOnInit() { }

  private getClass = function() {    
    let fullClassList : Array<string> = [];

    if (!this.buttontype) {
      fullClassList.push("primary");
    } else {
      if (typeof this.buttontype !== "string") {
        fullClassList.push("error");
        console.error("Your button type isn't a string");
      } else if (!this.types[this.buttontype]) {
        fullClassList.push("error");
        console.error("Your button type isn't an available type");
      } else {
        fullClassList.push(this.buttontype)
      }
    }

    if (!this.theme) {
      fullClassList.push("basic");
    } else {
      if (typeof this.theme !== "string") {
        fullClassList.push("error");
        console.error("Your button theme isn't a string");
      } else if (!themes[this.theme]) {
        fullClassList.push("error");
        console.error("Your button theme isn't an available theme");
      } else {
        fullClassList.push(this.theme);
      }
    }

    return fullClassList.join(" ");
  }

}
