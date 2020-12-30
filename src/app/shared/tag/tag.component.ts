import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tag',
  templateUrl: './tag.component.html'
})
export class TagComponent implements OnInit {

  @Input() tagName = '';
  @Input() inline: boolean = true;
  @Input() contentClass = '';
  constructor() { }

  ngOnInit() {
  }

}