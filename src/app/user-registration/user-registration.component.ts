import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { AuthenticationService } from "../Services/authentication.service";
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  /**
   *
   */
  constructor(authservice:AuthenticationService) {
    
    
  }
  show:boolean=false

  onShow(){
    debugger
    this.show=true;
  }
  RegistrationForm= new FormGroup({
    Empid:new FormControl('',[Validators.required]),
    Empname:new FormControl('',[Validators.required]),
    PhonNo:new FormControl('',[Validators.minLength(10),Validators.required]),
    Role:new FormControl ('',[Validators.required]),

    EmailId:new FormControl('',[Validators.required,Validators.email]),
    Password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/)])
  })
  get empIdValidator(){
    return this.RegistrationForm.get('Empid')
  }
  get empNameValidator(){
    return this.RegistrationForm.get('Empname')
  }
  get  phonNoValidator(){
    return this.RegistrationForm.get('PhonNo')
  }
  get roleValidator(){
    return this.RegistrationForm.get('Role')
  }
  get emailValidator(){
    return this.RegistrationForm.get('EmailId')
  }
  get passwordValidator(){
    return this.RegistrationForm.get('Password')
  }
  RegistrationFormSubmit(){
    console.log(this.RegistrationForm.value , "Role "+this.RegistrationForm.value['Role']);
    
  }


}
