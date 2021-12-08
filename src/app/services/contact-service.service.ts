import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact'

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  set contacts(t: Contact[]) {
    localStorage.setItem('contacts', JSON.stringify(t));
  }

  get contacts(): Contact[] {
    return JSON.parse(localStorage.getItem('contacts') || '');
  }

  // why contactSelected disapeared

  set contactSelected(t: Contact) {
    localStorage.setItem('contactSelected', JSON.stringify(t));
  }

  get contactSelected(): Contact {
    return JSON.parse(localStorage.getItem('contactSelected') || '');
  }

  constructor() { }


}
