import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @Output() onContactCreated = new EventEmitter(); 

  contactForm = this.formBuilder.group({
    fullname: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
    pseudo: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
    mail: ['', [Validators.required, Validators.email]]
  });

  constructor(private formBuilder: FormBuilder) {

   }

  ngOnInit(): void {
  }

  public onSubmit() : void {
    this.onContactCreated.emit({contactForm : this.contactForm})
  }

}
