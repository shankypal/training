import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements 
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() data: string = '';

  constructor() {
    console.log('Child: constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child: ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('Child: ngOnInit');
  }

  ngDoCheck(): void {
    console.log('Child: ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('Child: ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('Child: ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('Child: ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('Child: ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('Child: ngOnDestroy');
  }
}
