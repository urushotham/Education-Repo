import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from'@angular/forms';


@Component({
  selector: 'app-studentreg',
  templateUrl: './studentreg.component.html',
  styleUrls: ['./studentreg.component.css']
})
export class StudentregComponent implements OnInit {
  public signupForm!: FormGroup;


  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router:Router) { }



  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      id:[''],
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobile: ['', Validators.required]

    })
  }


  signUp() {
  
      /*this._http.post<any>("http://localhost:3000/signupStudents/", this.signupForm.value).subscribe(res => {*/
      this._http.post<any>("http://localhost:3000/signupStudents/", this.signupForm.value)
        .subscribe(_res => {
          alert("success");
          this.signupForm.reset();
             this.router.navigate(['studentlogin']);


        })
     
}
}

  //onSubmit() {
  //  this.submitted = true;
  //  if (this.registerForm.valid) {
  //    alert('Form Submitted succesfully');
  //    console.table(this.registerForm.value);
  //  }
  //}
