import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  @Input() contacts!: Contact[];
  @Output() onContactSelected = new EventEmitter();

  contactSelected?: Contact;

  constructor() {
    this.contactSelected = undefined;
  }

  ngOnInit(): void {
  }

  public onClick(contact: Contact) {
    if (this.contactSelected != contact) {
      this.contactSelected = contact;
      this.onContactSelected.emit({contactSelected: this.contactSelected});
    } else {
      this.contactSelected = undefined;
    }
  
    
  }

}
