import { HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  contactSelected!: Contact;
  keyBoardBuffer!: String;
  contactPropertyToChange?: string;
  fullNameSelected!: string;
  
  
  constructor(private contactService: ContactServiceService) {
    this.contactService = contactService;
  }

  ngOnInit() {
    this.contacts = this.contactService.contacts;
    this.keyBoardBuffer = "";
    this.contactSelected = this.contactService.contactSelected;
  }

  public onContactCreated(onContactCreatedEvent: any) {
    var contact = onContactCreatedEvent.contactForm.value;
    this.contacts.push(contact);
    this.contactService.contacts = this.contacts;
  }

  public onContactSelectedEvent(onContactSelectedEvent: any) : void {
    this.contactSelected = onContactSelectedEvent.contactSelected;
    // console.log(onContactSelectedEvent.contactSelected);
    //this.contactService.setContactSelected(this.contactSelected);
    
    console.log(onContactSelectedEvent.contactSelected);
    // this.fullNameSelected = onContactSelectedEvent.contactSelected;
    //console.log(this.fullNameSelected);
    this.contactService.setContactSelected(this.contactSelected.fullname)
    //console.log(this.contactService.getContactSelected());
    
  }

  public onKeyPressed(event: KeyboardEvent) {
    let keyPressed = event.key;
    console.log(keyPressed);
  
    if (keyPressed == "Backspace"  && this.keyBoardBuffer.length != 0) {
     this.keyBoardBuffer = this.keyBoardBuffer.substr(0, this.keyBoardBuffer.length-1)
    }
     if (keyPressed == "Enter") {
       console.log(this.keyBoardBuffer)
      // var contactSelected = this.contactService.getContactSelected().fullname;
      // var contactSelected = this.fullNameSelected;
      // console.log(contactSelected);
      // console.log(this.contactPropertyToChange + "      "+ contactSelected);
      // if (this.contactPropertyToChange != undefined && contactSelected != undefined) {
      //   // let propertyName: string = this.contactPropertyToChange;
      //   // console.log("enter in Enter")
      //   // console.log(propertyName)
      //   // let propertyModified = JSON.parse("{'"+ propertyName +"' : '"+ this.keyBoardBuffer +"'}");
      //   // Object.assign(this.contactSelected, propertyModified);
      //   // console.log(propertyModified);
      //   // console.log("Exit Enter")
  
      // }
    }
    if (keyPressed.match("\\w") && keyPressed != "Enter" && keyPressed != "Backspace"){
        this.keyBoardBuffer += keyPressed;
    }
    
  }

  public updateSelectedContactPropertyValue(): void {
    if (this.contactPropertyToChange != undefined && this.contactSelected != undefined) {
      // let contactModified = this.contactSelected;
      let propertyName: string = this.contactPropertyToChange;
      let propertyModified = JSON.parse("{'"+ propertyName +"' : '"+ this.keyBoardBuffer +"'}");
      Object.assign(this.contactSelected, propertyModified);
      console.log(propertyModified);

    }
  }

  public onChange(contactPropertyToChange : string): void {
    console.log(contactPropertyToChange); 
    this.keyBoardBuffer = "";
    this.contactPropertyToChange = contactPropertyToChange;
    // this.fullNameSelected = this.contactService.getContactSelected();
    // console.log(this.contactService.getContactSelected())
    // console.log("this.fullNameSelected =     " + this.fullNameSelected)
  }


}
