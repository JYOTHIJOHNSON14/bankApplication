import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any

  //database
  db: any = {
    1000: { "acno": 1000, "username": "Neer", "password": "1000", "balance": 5000 },
    1001: { "acno": 1001, "username": "Laisha", "password": "1001", "balance": 5000 },
    1002: { "acno": 1002, "username": "Vypm", "password": "1002", "balance": 3000 },


  }

  constructor() { }

  //saveDetails()
   saveDetails(){
    if(this.db){
      localStorage.setItem("database",JSON.stringify(this.db))
    }
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
   }



  //login


  login(acno: any, pswd: any) {

    let db = this.db
    if (acno in db) {

      if (pswd == db[acno]["password"]) {
        this.currentUser = db[acno]["username"]
        this.saveDetails()
        return true
      }
      else {
        alert("Incorrect password")
        return false
      }

    }
    else {
      alert("User does not exist!!!")
      return false
    }

  }


  //register

  register(username: any, acno: any, password: any) {

    let db = this.db
    if (acno in db) {
      return false
    }
    else {
      //insert in db
      db[acno] = {
        acno,
        username,
        password,
        "balanc": 0
      }
      console.log(db);
      this.saveDetails()
      return true
    }

  }

  //deposit

  deposit(acno: any, password: any, amt: any) {

    var amount = parseInt(amt)
    let db = this.db
    if (acno in db) {
      if (password == db[acno]["password"]) {
        db[acno]["balance"] += amount
        this.saveDetails()
        return db[acno]["balance"]
      }
      else {
        alert("incorrect password")
        return false
      }
    }
    else {
      alert("user doesn't exist...")
      return false
    }

  }


  //withdraw

  withdraw(acno: any, password: any, amt: any) {
    var amount = parseInt(amt)
    let db = this.db

    if (acno in db) {
      
      if (password == db[acno]["password"]) {

        if (db[acno]["balance"] > amount) {
          db[acno]["balance"] -= amount
          this.saveDetails()
          return db[acno]["balance"]
        }
        else{
          alert("insufficient balance")
        return false
        }

      }
      else {
        alert("incorrect password")
        return false
      }
    }

    else {
      alert("user doesn't exist...")
      return false
    }

  }



}
