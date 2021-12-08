import { HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { Component, HostListener } from '@angular/core';
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
  contactSelected?: Contact;
  keyBoardBuffer!: String;
  
  
  constructor(private contactService: ContactServiceService) {
  }

  ngOnInit() {
    this.contacts = this.contactService.contacts;
    this.keyBoardBuffer = "";
  }

  public onContactCreated(onContactCreatedEvent: any) {
    var contact = onContactCreatedEvent.contactForm.value;
    this.contacts.push(contact);
    this.contactService.contacts = this.contacts;
  }

  public onContactSelectedEvent(onContactSelectedEvent: any) : void {
    this.contactSelected = onContactSelectedEvent.contactSelected;
  }

  public onKeyPressed(event: KeyboardEvent) {
    let keyPressed = event.key;
    console.log(keyPressed);
  
    if (keyPressed == "Backspace"  && this.keyBoardBuffer.length != 0) {
     this.keyBoardBuffer = this.keyBoardBuffer.substr(0, this.keyBoardBuffer.length-1)
    } else if (keyPressed == "Enter") {
      console.log(this.keyBoardBuffer);
    }
    if (keyPressed.match("\\w") && keyPressed != "Enter" && keyPressed != "Backspace"){
        this.keyBoardBuffer += keyPressed;
    }
    
  }

  public onChange(contact: Contact): void {
    console.log(contact)
    this.keyBoardBuffer = "";
    // const index = this.contacts.indexOf(contact);
    // if (index >= 0) {
    //   this.contacts.splice(index, 1, contact);
    // }

  }


}
