import { Component, HostListener, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent implements OnInit {

  @Input() contact?: Contact;
  @Input() onChange!: Function;
  @Input() onKeyPressed!: Function;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:keydown', ['$event'])
  keylistener(event: KeyboardEvent) {
    this.onKeyPressed(event);
  }



}
