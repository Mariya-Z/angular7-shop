import { Component, OnInit, Optional } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  constructor(@Optional() private localStorage: LocalStorageService) { }


}
