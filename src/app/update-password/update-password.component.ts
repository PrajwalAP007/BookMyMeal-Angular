import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import {AuthenticationService} from '../Services/authentication.service';
import {Router} from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent {
  /**
   *
   */
  constructor(private updatePassService:AuthenticationService ,private router:Router,private _snackBar:MatSnackBar) {
  
    
  }
  UpdateForm= new FormGroup({
    CurrentPasssowrd:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/)]),
    NewPassword:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/)]),
    Confirmpassword:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/)])
  })
  

  get passwordValidator(){
    return this.UpdateForm.get('NewPassword')
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  UpdatePassword(){
    const empIdfromLocal: any = localStorage.getItem('Empid')
    const empid: number = empIdfromLocal as number
    var CurrentPassword=this.UpdateForm.value['CurrentPasssowrd'] as string
    var pass=this.UpdateForm.value["NewPassword"] as string;
    var newPass = this.UpdateForm.value["Confirmpassword"] as string;
  if(pass===newPass){
    this.updatePassService.updatePassword({"EmpId":empid,"PASSWORD":CurrentPassword,"NewPassword":newPass}).subscribe((result)=>{
      if(result){
        this.openSnackBar("Password Change Succesfully", "Ok")

      this.router.navigate(["/app-home-page"])
      }
      else{
       
        this.openSnackBar("Password dont get updated", "Ok")
         }
        })
  }
  else{
    var confirmPasswordErrorElement = document.getElementById("ConfirmpasswordError");

    if (confirmPasswordErrorElement) {
      confirmPasswordErrorElement.innerHTML = "Password doesn't match with the new password";
    } 

  }

  }
  onSelect(){
    this.router.navigate(['/app-update-password'])
  }
}
