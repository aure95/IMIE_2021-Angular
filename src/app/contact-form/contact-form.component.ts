import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm = this.formBuilder.group({
    fullname: [''],
    pseudo: [''],
    mail: ['']
  });

  constructor(private formBuilder: FormBuilder) {

   }

  ngOnInit(): void {
  }

  public onSubmit() : void {

  }

}
