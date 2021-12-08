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

  set contactSelected(t: Contact) {
    localStorage.setItem('contact', JSON.stringify(t));
  }

  get contactSelected(): Contact {
    return JSON.parse(localStorage.getItem('contact') || '');
  }

  // why contactSelected disapeared

  public setContactSelected(t: string) : void {
    try {
    localStorage.setItem('c', t);
    } catch (e) {
      console.log(e);
    }
  }

  public getContactSelected(): string {
   // console.log("getContactSelected       " +  localStorage.getItem('c') || '');
   // JSON.parse(localStorage.getItem('c') || '');
    return "hola this is a test";
  }

  constructor() { }


}
