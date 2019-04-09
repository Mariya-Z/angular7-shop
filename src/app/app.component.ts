import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitle: ElementRef;

  ngAfterViewInit() {
    this.appTitle.nativeElement.textContent = 'Shop';
  }
}
