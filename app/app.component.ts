import { ValidatorFn } from '@angular/forms';
import { NotifierService } from './notifier.service';
import { HttpClientModule } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators,FormControl,NgForm,FormGroupDirective } from '@angular/forms'
import { RegistrationService } from './registration.service';
import {ErrorStateMatcher} from '@angular/material/core';
import { FirstNameValidator} from './Shared/user-name.validator';
import  * as $ from "jquery"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FrondEnd'; 
  fieldTextType!: boolean;
  RegistrationForm!: FormGroup;
  constructor(private fb:FormBuilder, private register:RegistrationService, private notifierservice:NotifierService){}
  
  
  ngOnInit(): void {
    this.RegistrationForm = this.fb.group({
      username:['',[Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z]+$')]],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[a-z0-9\d$@].{7,}')]],
    }); 
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  onSubmit(){
    console.log('Submitted');
    console.log(this.RegistrationForm.value);
    this.register.registerfirst(this.RegistrationForm.value)
    .subscribe()
    this.RegistrationForm.reset();
    alert("Registration Successfull! please Login") 
  }
 
  /* RegistrationForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    cpassword: new FormControl(''),
  }); 
 
  loadApiData(){
    this.RegistrationForm.setValue({
      username:'Ravi',
      password:'1234',
      cpassword:'1234'

    });
  }*/

 
}

