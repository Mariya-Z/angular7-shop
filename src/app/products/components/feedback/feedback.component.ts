import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductHttpService } from '../../services';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  constructor(
    private router: Router,
    private productHttpService: ProductHttpService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {}

  onClose() {
    this.router.navigate(['.././'], { relativeTo: this.route });
    this.productHttpService.isDisplayed = true;
  }
}
