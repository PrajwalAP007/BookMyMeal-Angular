import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { AuthenticationService } from "../Services/authentication.service";
import { EmployeeDetails } from '../Modal/Authentication';
import {Router} from '@angular/router'; 
import { jwtDecode } from 'jwt-decode';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],

})
export class UserLoginComponent {

  isAuthenticated:any;
  EmpDetails:any;
 msg:string="Registration Successfull"
constructor(private authService:AuthenticationService,private router:Router,private  _snackBar:MatSnackBar) {

  
}
show = false
LoginForm= new FormGroup({
  EmailId:new FormControl('', [Validators.required,Validators.email]),
  Password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/)])
})

get emailValidator(){
  return this.LoginForm.get('EmailId')
}
get passwordValidator(){
  return this.LoginForm.get('Password')
}
openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action);
}
LoginFormSubmit(){
  debugger
  var email = this.LoginForm.value["EmailId"] as string
  var pass = this.LoginForm.value["Password"] as string
  this.authService.loginAuthentication({ "email": email, "password": pass }).subscribe(
    (loginToken) => {
    
     const token = loginToken;
   

     localStorage.setItem('token', token);
     const jwtToken= localStorage.getItem('token');
     if(jwtToken){
      const decodedToken: { EmpId: number,Role:string} = jwtDecode(jwtToken);
      const empIdFromToken: number = decodedToken.EmpId as number;
      const RoleFromToken:string=decodedToken.Role as string;

      localStorage.setItem('Empid',empIdFromToken.toString());
      localStorage.setItem('Role',RoleFromToken.toString());

     }

     if(token!=null){
      this.isAuthenticated=true;
      this.openSnackBar("Login Successfull", "Ok")

 
      this.router.navigate(['/app-home-page'])
     }

    },
    (error) => {
      this.openSnackBar("Invalid Credentials", "Ok")

     
    }
  );
  
}
onToggleForm() {
  this.show = !this.show;
}


RegistrationForm= new FormGroup({
  EMPLOYEEID:new FormControl('',[Validators.required]),
  EmpName:new FormControl('',[Validators.required]),
  PHONENUMBER:new FormControl('',[Validators.minLength(10),Validators.required,Validators.pattern(/^[0-9]*$/)]),
  Role:new FormControl ('',[Validators.required]),

  EMAIL:new FormControl('',[Validators.required,Validators.email]),
  PASSWORD:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/)])
})
get empIdValidator(){
  return this.RegistrationForm.get('EMPLOYEEID')
}
get empNameValidator(){
  return this.RegistrationForm.get('EmpName')
}
get  phonNoValidator(){
  return this.RegistrationForm.get('PHONENUMBER')
}
get roleValidator(){
  return this.RegistrationForm.get('Role')
}
get RegisteremailValidator(){
  return this.RegistrationForm.get('EMAIL')
}
get RegisterpasswordValidator(){
  return this.RegistrationForm.get('PASSWORD')
}
RegistrationFormSubmit(){
 var  formData= this.RegistrationForm.value 
 var employeeId = Number(formData['EMPLOYEEID']);
  var empName = formData['EmpName'] as string;
  var PHONENUMBER=formData['PHONENUMBER'] as string;
  var Email=formData["EMAIL"] as string;
  var pass=formData["PASSWORD"] as string;
  var role=formData['Role'] as string
  this.authService.setUserDetails({ "EMPLOYEEID": employeeId, "EmpName": empName,"PHONENUMBER":PHONENUMBER,"EMAIL":Email,"PASSWORD":pass,"Role":role }).subscribe((result) => {
  console.log(result);
  if(result!=null){
    this.openSnackBar("Registration Successful", "Ok")

  }

  },(error)=>{
    this.openSnackBar("Registration Failed", "Ok")

    console.log(error);
    
  }
  
  );
  
}
onSelect(){
  this.router.navigate(['/app-update-password'])
}


}
