import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent implements OnInit {

  @Input() contact?: Contact;

  constructor() { }

  ngOnInit(): void {
  }

}
