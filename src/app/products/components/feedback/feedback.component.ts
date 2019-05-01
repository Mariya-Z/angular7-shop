import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  constructor(
    private router: Router,
    private productService: ProductsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {}

  onClose() {
    this.router.navigate(['.././'], { relativeTo: this.route });
    this.productService.isDisplayed = true;
  }
}
