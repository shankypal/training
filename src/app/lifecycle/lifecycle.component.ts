import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements 
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  parentData: string = 'Hello from Parent';
  showChild: boolean = true;
  isDataChanged: boolean = false;
  count:number=0;
  constructor() {
    console.log('Parent: constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Parent: ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('Parent: ngOnInit');
  }

  ngDoCheck(): void {
    console.log('Parent: ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('Parent: ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('Parent: ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('Parent: ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('Parent: ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('Parent: ngOnDestroy');
  }

  changeData(value: string) {
    this.parentData = value;
    this.count++;
    // console.log('Parent: changeData', this.count);
  }

  toggleChild() {
    this.showChild = !this.showChild;
    this.isDataChanged = !this.isDataChanged;
  }
}
