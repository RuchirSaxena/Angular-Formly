import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contact } from './models/contact.model';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   //Declaring its default types of variables declared
  contactForm:FormGroup;
  contactModel:Contact; 
  contactFields:Array<FormlyFieldConfig>;

  constructor(){
 //Assigning  actual values of variables declared above
    this.contactForm=new FormGroup({

    });
    this.contactModel=new Contact();
    this.contactFields=this.contactModel.formFields();
  }

  submitForm(contact:Contact){
    console.log(contact);
  }

}
