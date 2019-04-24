import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    console.log('feedback');
  }

  onClose() {
    this.router.navigate([{ outlets: { feedback: null } }]);
    // this.messagesService.isDisplayed = false;
  }
}
