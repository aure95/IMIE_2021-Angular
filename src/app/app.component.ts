import { Component } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { ContactServiceService } from './services/contact-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contactManager';
  mockContacts: Contact[] = [{"fullname" : "duofjf fhfhf", "pseudo": "fhbhfhfb", "mail" : "jbfhjgfg@fjhbfhbfh"},
                             {"fullname" : "duokbhfhfbjf fhfhf", "pseudo": "jgfgfgf", "mail" : "jjflgknjghgng@fjhgknghbgbfh"},
                            {"fullname" : "fbjfbhfbhfbfjf fhlkojkjlkhf", "pseudo": "fhgknjgjg,hfb", "mail" : "lmhlbvgdqgufgkfg@fjhbfhbfh"}];

  contacts: Contact[] = [];
  
  constructor(private contactService: ContactServiceService) {

  }

  ngOnInit() {
   // this.contacts = this.contactService.contacts;
  }

  public onContactCreated(onContactCreatedEvent: any) {
    var contact = onContactCreatedEvent.contactForm.value;
    console.log(contact);
    this.contacts.push(contact);
    console.log(this.contacts);
    this.contactService.contacts = this.contacts;
  }


}
