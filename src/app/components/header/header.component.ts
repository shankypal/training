import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges, DoCheck {
  @Input() navItems: { label: string, route: string }[] = [];

  constructor() {
    // console.log("Header Component navItems in constructor:", this.navItems);
  }

  ngOnChanges(): void {
    // console.log("Header Component navItems in ngOnChanges:", this.navItems);
  }

  ngOnInit(): void {
    // console.log("Header Component navItems in ngOnInit:", this.navItems);
  }

  ngDoCheck(): void {
    // console.log("Header Component navItems in ngDoCheck:", this.navItems);
  }

}
