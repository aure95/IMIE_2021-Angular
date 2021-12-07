import { Component } from '@angular/core';
import { Contact } from 'src/app/models/Contact';

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

}
