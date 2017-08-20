import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aet-button',
  templateUrl: './aet-button.component.html',
  styleUrls: ['./aet-button.component.scss']
})
export class AetButtonComponent implements OnInit {

  // INPUTS
  @Input() buttontext : string;
  @Input() theme : string;
  @Input() buttontype : string;

  // VARIABLES
  private errorText : string;
  private themes : Object = {
    basic : true,
    dark : true,
    light : true,
    tron : true
  };

  constructor() { }

  ngOnInit() {
  }

  private getClass = function() {
    let fullClassList : Array<string> = [];
    if (!this.theme) {
      fullClassList.push("primary");
    } else {
      if (typeof this.theme !== "string") {
        fullClassList.push("error");
        this.errorText = "Your theme isn't a string";
      }
    }

    return fullClassList.join(" ");
  }

}
