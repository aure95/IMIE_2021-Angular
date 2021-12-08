import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contactSelected?: Contact;

  @Input() contacts!: Contact[];

  constructor() {
    this.contactSelected = undefined;
   }

  ngOnInit(): void {
  }

  public onClick(contact: Contact) {
    if (this.contactSelected != contact) {
      this.contactSelected = contact;
    } else {
      this.contactSelected = undefined;
    }
  
    
  }

}
