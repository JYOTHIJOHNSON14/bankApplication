import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //properties

  aim = "Perfect Banking Partner"

  accno = "Account number please"

  acno = ""

  pswd = ""


  
  loginForm=this.fb.group({
    acno: ['',[Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]]
  })


  //database

  // db:any={
  //   1000:{"acno":1000,"username":"Neer","password":"1000","balanc":5000},
  //   1001:{"acno":1001,"username":"Laisha","password":"1001","balanc":5000},
  //   1002:{"acno":1002,"username":"Vypm","password":"1002","balanc":3000},


  // }


  //dependency injection
  constructor(private router: Router, private ds: DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }



  //user defined function

  acnoChange(event: any) {

    console.log(event.target.value);
    this.acno = event.target.value
    console.log(this.acno);

  }


  pswdChange(event: any) {

    console.log(event.target.value);
    this.pswd = event.target.value
    console.log(this.pswd);

  }



  login() {
    //alert("login clicked")

    var acno = this.loginForm.value.acno
    var pswd = this.loginForm.value.pswd
    // let db=this.db
    const result = this.ds.login(acno, pswd)


    if (result) {

      alert("Login successful")

      this.router.navigateByUrl('dashboard')
    }

  }





  //template referencing variable


  // login(a:any,p:any){

  //   console.log(a.value);


  // var acno=a.value
  // var pswd=p.value
  // let db=this.db

  // if(acno in db){

  //   if (pswd == db[acno]["password"]){

  //      alert("Login successful")

  //   }
  //   else{
  //     alert("Incorrect password")
  //   }

  // }
  // else{
  //   alert("User does not exist!!!")
  // }


  // //user defined function


  // }



}
